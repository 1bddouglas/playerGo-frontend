import { useEffect, useState } from "react";
import { signOut } from "../firebaseConfig";
import Rule from "../models/Rule";
import { getAllSubmissions } from "../services/submissionAPIService";
import SingleRule from "./SingleRule";

import "./Submissions.css";

const Submissions = () => {
  const [submissions, setSubmissions] = useState<Rule[]>([]);

  useEffect(() => {
    if (submissions) {
      getAllSubmissions().then((res) => {
        setSubmissions(res);
      });
    }
  }, []);

  return (
    <div className="Submissions">
      <button onClick={signOut}>Sign out</button>
      <ul className="submission-list">
        {submissions.map((rule) => (
          <SingleRule
            rule={rule}
            key={rule._id}
            submissions={submissions}
            setSubmissions={setSubmissions}
          />
        ))}
      </ul>
    </div>
  );
};

export default Submissions;
