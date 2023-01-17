import { useEffect, useState } from "react";
import Rule from "../models/Rule";
import { approveSubmission } from "../services/approvedAPIService";
import { denySubmission } from "../services/deniedAPIService";
import { deleteSubmission } from "../services/submissionAPIService";
import "./SingleRule.css";

interface Props {
  rule: Rule;
  submissions: Rule[];
  setSubmissions: (rules: Rule[]) => void;
}

const SingleRule = ({ rule, submissions, setSubmissions }: Props) => {
  const updatedSubmissions = [...submissions].filter(
    (submission) => submission._id !== rule._id
  );
  const approveHandler = () => {
    approveSubmission(rule).then((res) => console.log(res));
    deleteSubmission(rule._id!);
    setSubmissions(updatedSubmissions);
  };

  const denyHandler = () => {
    denySubmission(rule).then((res) => console.log(res));
    deleteSubmission(rule._id!);
    setSubmissions(updatedSubmissions);
  };

  return (
    <li className="SingleRule">
      <p>{rule.ruleText}</p>
      <button className="approve" onClick={approveHandler}>
        Approve
      </button>
      <button className="deny" onClick={denyHandler}>
        Deny
      </button>
    </li>
  );
};

export default SingleRule;
