import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import axios from "axios";

export interface IValues {
  [key: string]: any;
}
export interface IFormState {
  id: number;
  customer: any;
  values: IValues[];
  submitSuccess: boolean;
  loading: boolean;
}
