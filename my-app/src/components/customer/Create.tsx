import * as React from "react";
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

export interface IValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}
export interface IFormState {
  [key: string]: any;
  values: IValues[];
  submitSuccess: boolean;
  loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      values: [],
      loading: false,
      submitSuccess: false,
    };
  }

  private processFormSubmission = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      description: this.state.description,
    };
    this.setState({
      submitSuccess: true,
      values: [...this.state.values, formData],
      loading: false,
    });
    axios.post(`http://localhost:5000/customers`, formData).then((data) => [
      setTimeout(() => {
        this.props.history.push("/");
      }, 1500),
    ]);
  };

  private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
}
export default withRouter(Create);
