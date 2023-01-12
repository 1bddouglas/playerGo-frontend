import { useState } from "react";
import Rule from "../models/Rule";
import { approveSubmission } from "../services/approvedAPIService";
import "./SingleRule.css";

interface Props {
  rule: Rule;
}

const SingleRule = ({ rule }: Props) => {
  const approveHandler = () => {
    approveSubmission(rule).then((res) => {
      console.log(res);
    });
  };

  return (
    <li className="SingleRule">
      <p>{rule.ruleText}</p>
      <button className="approve" onClick={approveHandler}>
        Approve
      </button>
      <button className="deny">Deny</button>
    </li>
  );
};

export default SingleRule;
