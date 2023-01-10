import { FormEvent, useState } from "react";
import Rule from "../models/Rule";
import { createSubmission } from "../services/submissionAPIService";
import "./SubmissionForm.css";

const SubmissionForm = () => {
  const [rule, setRule] = useState("");
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setRule("");
    const newRule: Rule = {
      ruleText: rule,
    };
    console.log(newRule);

    createSubmission(newRule).then((res) => {
      console.log(res);
    });
  };

  return (
    <form className="SubmissionForm" onSubmit={submitHandler}>
      <label htmlFor="rule">Add a Rule</label>
      <input
        type="text"
        name="rule"
        id="rule"
        value={rule}
        onChange={(e) => setRule(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SubmissionForm;
