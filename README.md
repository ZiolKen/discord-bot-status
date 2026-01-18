<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ZiolKen/discord-bot-status/main/assets/ico.png" alt="Project Logo" width="50%" />
</p>

# <p align="center">Discord Bot Status</p>

<div>
  <img style="width: 100%;" src="https://capsule-render.vercel.app/api?type=waving&height=110&section=header&fontSize=60&fontColor=FFFFFF&fontAlign=50&fontAlignY=40&descSize=18&descAlign=50&descAlignY=70&theme=cobalt" />
</div>

<p align="center">
  <img src="https://files.catbox.moe/i0c78l.png" alt="Banner" width="720">
</p>

<p align="center">
  <a href="https://botstatus.vercel.app"><img src="https://img.shields.io/badge/Live-Vercel-6366f1?style=for-the-badge"></a>
  <a href="https://bot-status.pages.dev"><img src="https://img.shields.io/badge/Live-Cloudflare-f97316?style=for-the-badge"></a>
  <a href="https://ziolken.github.io/discord-bot-status"><img src="https://img.shields.io/badge/Live-GitHub%20Pages-18181b?style=for-the-badge"></a>
</p>

<p align="center">
  <a href="https://github.com/ZiolKen/discord-bot-status/stargazers"><img src="https://img.shields.io/github/stars/ZiolKen/discord-bot-status?style=flat"></a>
  <a href="https://github.com/ZiolKen/discord-bot-status/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ZiolKen/discord-bot-status?style=flat"></a>
  <a href="https://github.com/ZiolKen/discord-bot-status/forks"><img src="https://img.shields.io/github/forks/ZiolKen/discord-bot-status?style=flat"></a>
</p>

A sleek, real-time status page for a Discord bot, providing current system information, service status, and incident reports.

---

## ✨ Features

-   **Global Status:** A top banner indicates the overall system health (Operational, Degraded, or Outage) with a pulsing indicator.
-   **Real-time Metrics:** Displays live summary data for Ping, Uptime, Server Count, and User Count.
-   **Service Monitoring:** Tracks the status of individual services like the Host System, Discord Gateway, API Endpoint, and Command System.
-   **Ping History:** A line chart visualizes the bot's ping latency over the last 30 updates.
-   **Incident Reporting:** Lists past and ongoing incidents with details on the affected service, duration, and resolution status.
-   **Technical Info:** Provides key details such as bot version, Node.js/discord.js versions, and the timestamp of the last boot and data update.

---

## ⚙️ How It Works

This status page is a lightweight, static front-end application built with vanilla HTML, CSS, and JavaScript.

-   It dynamically fetches bot status and incident data from a dedicated backend API endpoint (`https://discord-bot-us.onrender.com`).
-   The page automatically polls the API every 5 seconds to ensure the displayed information is always current.
-   The ping history graph is rendered using [Chart.js](https://www.chartjs.org/).

---

## 🚀 Deployment

This project is configured for easy deployment on multiple platforms:

-   **Vercel:** Using `vercel.json` for header and URL configurations.
-   **GitHub Pages:** Deployed via a GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`).
-   **Cloudflare Pages:** Can be deployed directly from the repository.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ❤️ Credits

Created and maintained by **[ZiolKen](https://github.com/ZiolKen)**.

---

## ☕ Support

If you find this helpful:

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/_zkn)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/zkn0461)
[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://patreon.com/ZiolKen)

<div>
  <img style="width: 100%;" src="https://capsule-render.vercel.app/api?type=waving&height=110&section=footer&fontSize=60&fontColor=FFFFFF&fontAlign=50&fontAlignY=40&descSize=18&descAlign=50&descAlignY=70&theme=cobalt" />
</div>