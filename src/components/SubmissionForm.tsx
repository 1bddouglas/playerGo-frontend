import { FormEvent, useState } from "react";
import Rule from "../models/Rule";
import { createSubmission } from "../services/submissionAPIService";
import "./SubmissionForm.css";

interface Props {
  setShowForm: (value: boolean) => void;
  setShowPending: (value: boolean) => void;
}

const SubmissionForm = ({ setShowForm, setShowPending }: Props) => {
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
    setShowForm(false);
    setShowPending(true);
  };

  return (
    <div className="SubmissionForm">
      <div className="bttn-div">
        <button className="x-bttn" onClick={() => setShowForm(false)}>
          X
        </button>
      </div>
      <form onSubmit={submitHandler}>
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
    </div>
  );
};

export default SubmissionForm;
