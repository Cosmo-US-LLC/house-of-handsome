import { spawnSync } from "node:child_process";

process.loadEnvFile(".env.local");

const token = process.env.VERCEL_TOKEN;

if (!token) {
  console.error("Missing VERCEL_TOKEN. Set it in .env.local.");
  process.exit(1);
}

const result = spawnSync("vercel", ["--prod", "--token", token], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
