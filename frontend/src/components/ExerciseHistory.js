import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressChart from "./ProgressChart";

const ExerciseHistory = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/exercises")
      .then((res) => setExercises(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Exercise History</h1>
      <ProgressChart exerciseData={exercises} />
    </div>
  );
};

export default ExerciseHistory;
