#!/usr/bin/env node

import { dev, build } from "./runAstro.js";

const command = process.argv[2];

if (command === "dev") {
  await dev();
} else if (command === "build") {
  await build();
} else {
  console.log("Dummy");
  console.log("");
  console.log("Commands:");
  console.log("  dummy dev");
  console.log("  dummy build");
}
