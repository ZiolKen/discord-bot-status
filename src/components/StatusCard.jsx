export default function StatusCard({ status }) {
  return (
    <div style={{
      background: status.online ? "#4CAF50" : "#F44336",
      color: "white",
      padding: "1rem",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <h2>{status.online ? "All Systems Operational" : "Bot Offline"}</h2>
      <p>Updated at {new Date().toLocaleTimeString()}</p>
    </div>
  );
}