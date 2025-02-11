import { useEffect, useState } from "react";

const ExerciseLog = () => {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [exercises, setExercises] = useState([]);

  const fetchExercises = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/exercises", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setExercises(data);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ type, duration }),
    });

    if (res.ok) {
      setType("");
      setDuration("");
      fetchExercises(); // Refresh the list
    } else {
      alert("Failed to log exercise");
    }
  };

  return (
    <div>
      <h2>Exercise Log</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Exercise Type" value={type} onChange={(e) => setType(e.target.value)} required />
        <input type="number" placeholder="Duration (minutes)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        <button type="submit">Log Exercise</button>
      </form>
      <h3>Your Exercises</h3>
      <ul>
        {exercises.map((ex) => (
          <li key={ex._id}>{ex.type} - {ex.duration} mins on {new Date(ex.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseLog;
