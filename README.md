# Discord Bot Status
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ZiolKen/discord-bot-status)

<p align="center">
  <img src="https://raw.githubusercontent.com/ZiolKen/discord-bot-status/main/assets/ico.png" alt="Project Logo" width="50%" />
</p>

A sleek, real-time status page for a Discord bot, providing current system information, service status, and incident reports.

## 🌐 Live Demos

You can view the live status page at the following URLs:

-   [https://botstatus.vercel.app](https://botstatus.vercel.app)
-   [https://ziolken.vercel.app/status](https://ziolken.vercel.app/status)
-   [https://bot-status.pages.dev](https://bot-status.pages.dev)

## ✨ Features

-   **Global Status:** A top banner indicates the overall system health (Operational, Degraded, or Outage) with a pulsing indicator.
-   **Real-time Metrics:** Displays live summary data for Ping, Uptime, Server Count, and User Count.
-   **Service Monitoring:** Tracks the status of individual services like the Host System, Discord Gateway, API Endpoint, and Command System.
-   **Ping History:** A line chart visualizes the bot's ping latency over the last 30 updates.
-   **Incident Reporting:** Lists past and ongoing incidents with details on the affected service, duration, and resolution status.
-   **Technical Info:** Provides key details such as bot version, Node.js/discord.js versions, and the timestamp of the last boot and data update.

## ⚙️ How It Works

This status page is a lightweight, static front-end application built with vanilla HTML, CSS, and JavaScript.

-   It dynamically fetches bot status and incident data from a dedicated backend API endpoint (`https://discord-bot-us.onrender.com`).
-   The page automatically polls the API every 5 seconds to ensure the displayed information is always current.
-   The ping history graph is rendered using [Chart.js](https://www.chartjs.org/).

## 🚀 Deployment

This project is configured for easy deployment on multiple platforms:

-   **Vercel:** Using `vercel.json` for header and URL configurations.
-   **GitHub Pages:** Deployed via a GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`).
-   **Cloudflare Pages:** Can be deployed directly from the repository.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.