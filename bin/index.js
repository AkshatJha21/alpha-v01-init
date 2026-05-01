#!/usr/bin/env node

import { program } from "commander";
import { wakeup } from "./commands/wakeup.js";


program.name('iris').description('Your virtual assistant').version('1.0.0');

program.command('wakeup').description('Wake up Iris and get a greeting').action(wakeup);

program.parse();