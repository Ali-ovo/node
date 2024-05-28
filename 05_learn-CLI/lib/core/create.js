const { createProjectAction } = require('./actions.js')

const createCommands = (program) => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)
}

module.exports = createCommands
