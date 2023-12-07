const print = console.log
const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
print(stream)
