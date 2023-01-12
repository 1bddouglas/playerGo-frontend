import { useEffect, useState } from "react";
import Rule from "../models/Rule";
import { getAllSubmissions } from "../services/submissionAPIService";
import SingleRule from "./SingleRule";

import "./Submissions.css";

const Submissions = () => {
  const [submissions, setSubmission] = useState<Rule[]>([]);

  useEffect(() => {
    getAllSubmissions().then((res) => {
      setSubmission(res);
    });
  }, []);

  return (
    <div className="Submissions">
      <ul className="submission-list">
        {submissions.map((rule) => (
          <SingleRule rule={rule} key={rule._id} />
        ))}
      </ul>
    </div>
  );
};

export default Submissions;
