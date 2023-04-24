import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const clientPath = path.join(__dirname, "../client");
app.use(express.static(clientPath));

// console.log(clientPath);

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Login Page
app.get("/login", (req, res) => {
  res.sendFile(path.join(clientPath, "login.html"));
});

// Sign Up Page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(clientPath, "signup.html"));
});

// Page Not Found
app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(clientPath, "404.html"));
});

// Server Listioning
app.listen(PORT, HOSTNAME, () => {
  console.log(`[!!!] Server Running at http://${HOSTNAME}:${PORT}`);
});

