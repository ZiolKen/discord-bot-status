const API_URL = "https://discord-bot.onrender.com/status";

async function updateStatus() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const statusEl = document.getElementById("status");
    const pingEl = document.getElementById("ping");
    const uptimeEl = document.getElementById("uptime");
    const guildsEl = document.getElementById("guilds");
    const usersEl = document.getElementById("users");
    const updatedEl = document.getElementById("updated");

    const isOnline = data.status === "online";

    statusEl.textContent = isOnline ? "🟢 Online" : "🔴 Offline";
    statusEl.className = isOnline ? "online" : "offline";

    pingEl.textContent = data.ping;
    uptimeEl.textContent = data.uptime;
    guildsEl.textContent = data.guilds;
    usersEl.textContent = data.users;
    updatedEl.textContent = new Date(data.updated).toLocaleString();

  } catch (e) {
    document.getElementById("status").textContent = "⚠️ Cannot connect";
    document.getElementById("status").className = "offline";
  }
}

updateStatus();
setInterval(updateStatus, 15000); // cập nhật mỗi 15s
