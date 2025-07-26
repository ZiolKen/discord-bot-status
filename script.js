    document.addEventListener("DOMContentLoaded", () => {
      const pingChart = new Chart(document.getElementById('pingChart'), {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Ping (ms)',
            data: [],
            borderColor: '#58a6ff',
            backgroundColor: 'rgba(88, 166, 255, 0.2)',
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: { display: false },
            y: { beginAtZero: true }
          }
        }
      });

      async function loadStatus() {
        const banner = document.getElementById("status-banner");
        const spinner = document.getElementById("spinner");
        if (spinner) spinner.style.display = "inline-block";

        try {
          const res = await fetch("https://discord-bot-e6f7.onrender.com/status");
          const data = await res.json();

          if (spinner) spinner.style.display = "none";
          banner.innerHTML = data.status === "online"
            ? "🟢 Bot Online"
            : "🔴 Bot Offline";
          banner.className = `status-indicator ${data.status === "online" ? "online" : "offline"}`;

          document.getElementById("host").textContent = "🟢 Online";
          document.getElementById("ping").textContent = `${data.ping} ms`;
          document.getElementById("uptime").textContent = data.uptime;
          document.getElementById("guilds").textContent = data.guilds;
          document.getElementById("users").textContent = data.users;
          document.getElementById("updated").textContent = new Date(data.updated).toLocaleString();
          document.getElementById("boot").textContent = new Date(Date.now() - parseUptime(data.uptime)).toLocaleString();

          document.getElementById("api-status").textContent = "● Online";
          document.getElementById("api-status").className = "online-dot";

          const now = new Date().toLocaleTimeString();
          if (pingChart.data.labels.length >= 30) {
            pingChart.data.labels.shift();
            pingChart.data.datasets[0].data.shift();
          }
          pingChart.data.labels.push(now);
          pingChart.data.datasets[0].data.push(data.ping);
          pingChart.update();
        } catch (err) {
          if (spinner) spinner.style.display = "none";
          banner.textContent = "🔴 Bot Offline";
          banner.className = "status-indicator offline";
          document.getElementById("host").textContent = "🔴 DOWN ⚠️";
          document.getElementById("api-status").textContent = "● Offline";
          document.getElementById("api-status").className = "offline-dot";
          console.error("Failed to fetch status:", err);
        }
      }

      function parseUptime(str) {
        const parts = str.split(" ");
        let ms = 0;
        for (const part of parts) {
          const [val, unit] = part.match(/\d+|\D+/g);
          if (unit === "h") ms += +val * 3600000;
          if (unit === "m") ms += +val * 60000;
          if (unit === "s") ms += +val * 1000;
        }
        return ms;
      }

      loadStatus();
      setInterval(loadStatus, 1000);
    });