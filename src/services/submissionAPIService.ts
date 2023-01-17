import axios from "axios";
import Rule from "../models/Rule";

const baseURL: string = process.env.REACT_APP_URL || "";

export const getAllSubmissions = (): Promise<Rule[]> => {
  return axios
    .get(`${baseURL}/matrix`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

// service for users generating rule suggestions
export const createSubmission = (rule: Rule): Promise<Rule> => {
  return axios
    .post(`${baseURL}/matrix`, rule)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};

export const deleteSubmission = (id: string): Promise<Rule> => {
  return axios
    .delete(`${baseURL}/matrix/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
