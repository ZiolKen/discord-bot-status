<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/ZiolKen/discord-bot-status/main/assets/ico.png" alt="Project Logo" width="50%" />
</p>

# <p align="center">Discord Bot Status</p>

<div>
  <img style="width: 100%;" src="https://capsule-render.vercel.app/api?type=waving&height=110&section=header&fontSize=60&fontColor=FFFFFF&fontAlign=50&fontAlignY=40&descSize=18&descAlign=50&descAlignY=70&theme=cobalt" />
</div>

<p align="center">
  <img src="https://files.catbox.moe/b015un.png" alt="Banner" width="720">
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

A sleek, modern, and real-time status dashboard for your Discord bot. It provides a clear and professional interface to monitor your bot's health, including live metrics, individual service status, and a detailed incident history.

---

## ✨ Features

-   **Real-time Monitoring:** Get instant insights with a global status banner, live ping updates, uptime tracking, and server/user counts. The data automatically refreshes every 5 seconds.
-   **Live Ping Chart:** Visualize your bot's latency over time with a dynamic line chart that updates with the latest ping history.
-   **Service Health:** Monitor the operational status of individual bot subsystems, including the Discord Gateway, API Endpoint, and Command System.
-   **Incident History:** Track past and ongoing incidents with a 30-day timeline view. Click on any day to see detailed reports, including affected services, duration, and resolution status.
-   **Detailed Technical Info:** Access key build and runtime information, such as the bot version, Node.js and discord.js versions, and the timestamp of the last boot and data update.
-   **Clean & Responsive UI:** Built with a focus on readability and accessibility, providing a great experience on both desktop and mobile devices.

---

## ⚙️ How It Works

This status page is a lightweight, static frontend application built with vanilla HTML, CSS, and JavaScript. It operates without a complex backend framework, making it fast and easy to deploy.

-   **Data Fetching:** The page dynamically fetches status and incident data from a backend API. The primary endpoint used is `https://discord-bot-us.onrender.com`.
-   **Auto-Refresh:** It polls the API every 5 seconds to ensure the displayed information is always current.
-   **Visualization:** The live ping history graph is rendered using **Chart.js**.

---

## 🚀 Deployment

The project is designed for simple, hassle-free deployment on various static hosting platforms.

-   **Vercel:** Includes a `vercel.json` file for automatic configuration of clean URLs and headers.
-   **GitHub Pages:** A GitHub Actions workflow (`.github/workflows/jekyll-gh-pages.yml`) is included to build and deploy the site automatically on pushes to the `main` branch.
-   **Cloudflare Pages:** Can be easily deployed by connecting your repository to a Cloudflare Pages project.

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