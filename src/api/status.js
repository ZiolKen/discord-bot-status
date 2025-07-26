export default async function handler(req, res) {
  const botStatus = await fetch("https://discord-bot-e6f7.onrender.com/status")
    .then(r => r.json())
    .catch(() => ({ online: false }));

  res.status(200).json(botStatus);
}