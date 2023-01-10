import axios from "axios";
import Rule from "../models/Rule";
const baseURL: string = process.env.REACT_APP_URL || "";

export const createSubmission = (rule: Rule): Promise<Rule> => {
  return axios
    .post(`${baseURL}/`, rule)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
