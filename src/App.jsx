import { useEffect, useState } from "react";
import StatusCard from "./components/StatusCard";

export default function App() {
  const [status, setStatus] = useState({ online: false });

  useEffect(() => {
    fetch("/api/status").then(r => r.json()).then(setStatus);
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "auto" }}>
      <img src="/header.png" alt="Header" style={{ width: "100%", borderRadius: "10px" }} />
      <h1 style={{ textAlign: "center" }}>Discord Bot Status</h1>
      <StatusCard status={status} />
    </div>
  );
}