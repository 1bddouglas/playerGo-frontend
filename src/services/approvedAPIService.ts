import axios from "axios";
import Rule from "../models/Rule";

const baseURL: string = process.env.REACT_APP_URL || "";

// displaying rules from the approved collection
export const getAllApproved = (): Promise<Rule[]> => {
  return axios
    .get(`${baseURL}/approved`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

// adding a rule to the approved collection
export const approveSubmission = (rule: Rule): Promise<Rule> => {
  return axios
    .post(`${baseURL}/approved`, rule)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
