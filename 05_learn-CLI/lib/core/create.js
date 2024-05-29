const { createProjectAction, addCpmAction } = require('./actions.js')

const createCommands = (program) => {
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    .action(createProjectAction)

  program.command('addcpm <name> [dest]').description('add a component').action(addCpmAction)
}

module.exports = createCommands
