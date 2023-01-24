import { useEffect, useState } from "react";
import Rule from "../models/Rule";
import { getAllApproved } from "../services/approvedAPIService";
import SubmissionForm from "./SubmissionForm";
import "./UserContent.css";

const UserContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [showUserRules, setShowUserRules] = useState<Rule[]>([]);
  const [showPending, setShowPending] = useState(false);

  setTimeout(() => {
    setShowPending(false);
  }, 1500);

  useEffect(() => {
    getAllApproved().then((res) => setShowUserRules(res));
  }, []);

  return (
    <div className="UserContent">
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Submit a Rule!
      </button>
      <div className="border-div">
        <h2>User Submitted Rules:</h2>
      </div>
      <div className="user-rules">
        <ol>
          {showUserRules.map((rule) => (
            <li>{rule.ruleText}</li>
          ))}
        </ol>
      </div>
      <div className="form-div">
        {showForm && (
          <SubmissionForm
            setShowForm={setShowForm}
            setShowPending={setShowPending}
          />
        )}
        {showPending && (
          <div className="pending-div">Your Submission is Pending</div>
        )}
      </div>
    </div>
  );
};

export default UserContent;
