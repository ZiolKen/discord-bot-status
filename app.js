const STATUS_URL = "https://discord-bot-us.onrender.com/status";
const INCIDENTS_URL = "https://discord-bot-us.onrender.com/incidents";

/* ========= CHART ========= */
const pingHistory = [];
const MAX_POINTS = 30;

const chart = new Chart(
  document.getElementById("pingChart"),
  {
    type: "line",
    data: { labels: [], datasets: [{
      data: [],
      borderColor: "#22c55e",
      borderWidth: 2,
      tension: 0.4
    }]},
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { ticks: { color: "#9ca3af" } }
      }
    }
  }
);

function updateChart(ping) {
  if (pingHistory.length >= MAX_POINTS) pingHistory.shift();
  pingHistory.push(ping);
  chart.data.labels = pingHistory.map((_, i) => i);
  chart.data.datasets[0].data = pingHistory;
  chart.update();
}

/* ========= SERVICE STATS ========= */
const serviceStats = {
  gateway: { up: 0, down: 0 },
  api: { up: 0, down: 0 },
  commands: { up: 0, down: 0 }
};

function uptime(stat) {
  const t = stat.up + stat.down;
  return t === 0 ? "100%" : ((stat.up / t) * 100).toFixed(2) + "%";
}

/* ========= RENDER ========= */
function renderGlobal(status, incidents) {
  const banner = document.getElementById("global-status");

  let text = "All Systems Operational";
  let cls = "ok";

  if (status.hostService === "down") {
    text = "Major System Outage";
    cls = "down";
  } else if (incidents.some(i => !i.resolvedAt)) {
    text = "Partial System Outage";
    cls = "degraded";
  } else if (Object.values(status.services).some(s => s !== "online")) {
    text = "Degraded Performance";
    cls = "degraded";
  }

  banner.textContent = text;
  banner.className = `status-banner ${cls}`;
}

function renderService(key, label, services, incidents) {
  let state = services[key] || "offline";

  // Incident override
  if (incidents.some(i => i.service === key && !i.resolvedAt)) {
    state = "offline";
  }

  // Degraded logic (Gateway ping)
  if (key === "gateway" && services[key] === "online") {
    if (window.lastPing > 250) state = "degraded";
  }

  state === "online"
    ? serviceStats[key].up++
    : serviceStats[key].down++;

  document.getElementById(`service-${key}`).innerHTML = `
    <div>
      <div class="service-name">${label}</div>
      <div class="service-meta">
        Uptime: ${uptime(serviceStats[key])}
      </div>
    </div>
    <div class="service-status ${state}">
      ${state === "online"
        ? "Operational"
        : state === "degraded"
        ? "Degraded"
        : "Offline"}
    </div>
  `;
}

function renderIncidents(list) {
  const box = document.getElementById("incidents");
  if (!list.length) {
    box.textContent = "No incidents reported 🎉";
    return;
  }

  box.innerHTML = "";
  list.forEach(i => {
    box.innerHTML += `
      <div class="incident ${i.resolvedAt ? "resolved" : "active"}">
        <strong>${i.title}</strong><br>
        ${i.service} • ${i.resolvedAt ? "Resolved" : "Investigating"}
      </div>
    `;
  });
}

/* ========= LOAD ========= */
async function load() {
  try {
    const [s, i] = await Promise.all([
      fetch(STATUS_URL).then(r => r.json()),
      fetch(INCIDENTS_URL).then(r => r.json())
    ]);

    window.lastPing = s.ping;

    document.getElementById("ping").textContent = `${Math.round(s.ping)} ms`;
    document.getElementById("uptime").textContent = s.uptime;
    document.getElementById("guilds").textContent = s.guilds;
    document.getElementById("users").textContent = s.users;
    document.getElementById("host").textContent = s.host;
    document.getElementById("boot").textContent = new Date(s.lastBoot).toLocaleString();
    document.getElementById("updated").textContent = new Date(s.updated).toLocaleString();

    renderService("gateway", "Discord Gateway", s.services, i);
    renderService("api", "API Endpoint", s.services, i);
    renderService("commands", "Command System", s.services, i);

    renderIncidents(i);
    renderGlobal(s, i);
    updateChart(s.ping);

  } catch {
    const banner = document.getElementById("global-status");
    banner.textContent = "Status service unreachable";
    banner.className = "status-banner down";
  }
}

load();
setInterval(load, 30000);
