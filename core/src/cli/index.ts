#!/usr/bin/env node

import { runDev } from "./dev";
import { runBuild } from "./build";

const command = process.argv[2];

switch (command) {
  case "dev":
    await runDev();
    break;
  case "build":
    await runBuild();
    break;
  default:
    console.log(`
Dummy

Commands:
  dummy dev     Start local dev server
  dummy build   Build site for production
`);
    process.exit(1);
}
