const apiUrl = "https://discord-bot-e6f7.onrender.com/status";

async function fetchStatus() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    document.getElementById("status").textContent = data.status;
    document.getElementById("status").className = data.status;
    document.getElementById("ping").textContent = data.ping;
    document.getElementById("uptime").textContent = data.uptime;
    document.getElementById("guilds").textContent = data.guilds;
    document.getElementById("users").textContent = data.users;
    document.getElementById("updated").textContent = new Date(data.updated).toLocaleString();
  } catch (e) {
    document.getElementById("status").textContent = "offline";
    document.getElementById("status").className = "offline";
    document.getElementById("ping").textContent = "-";
    document.getElementById("uptime").textContent = "-";
    document.getElementById("guilds").textContent = "-";
    document.getElementById("users").textContent = "-";
    document.getElementById("updated").textContent = "-";
  }
}

fetchStatus();
setInterval(fetchStatus, 10000);
