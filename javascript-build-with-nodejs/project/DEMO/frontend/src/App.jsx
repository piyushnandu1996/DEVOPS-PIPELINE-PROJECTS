import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://3.25.126.26:5000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>DevOps Demo Project</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

