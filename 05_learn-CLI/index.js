#!/usr/bin/env node
const { program } = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// check version
program.version(require('./package.json').version, '-v, --version')

helpOptions(program)

createCommands(program)

program.parse(process.argv)
