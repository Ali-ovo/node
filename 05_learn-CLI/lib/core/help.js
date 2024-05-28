const helpOptions = (program) => {
  // add options
  program.option('-w --ali', 'ali cli')
  program.option('-d --dest <dest>', 'a destination folder, example: -d /src/components', '/default')

  program.on('--help', function () {
    console.log('')
    console.log('Other:')
    console.log('  other options')
  })
}

module.exports = helpOptions
