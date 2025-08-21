import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]]
});