import { useEffect, useState } from "react";
import Rule from "../models/Rule";
import { getAllApproved } from "../services/approvedAPIService";
import SubmissionForm from "./SubmissionForm";
import "./UserContent.css";

const UserContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [showUserRules, setShowUserRules] = useState<Rule[]>([]);

  useEffect(() => {
    getAllApproved().then((res) => setShowUserRules(res));
  }, []);

  return (
    <div className="UserContent">
      <div className="user-rules">
        <ul>
          {showUserRules.map((rule) => (
            <li>{rule.ruleText}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Submit a Rule!
      </button>
      {showForm && <SubmissionForm />}
    </div>
  );
};

export default UserContent;
