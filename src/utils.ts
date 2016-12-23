/**
* Parses an argument string into an array of arguments
* @param {string} argString - The argument string to parse
* @return {string[]} The array of arguments
*/
export function parseArgs(argString) {
  const re = /\s*(?:("|')([^]*?)\1|(\S+))\s*/g
  const result = []
  let match = []
  var argCount = argString.length

  // Get, match and push the capture group that is not null to the result
  while(--argCount && (match = re.exec(argString))) {
    result.push(match[2] || match[3])
  }
  // If text remains, remove quotes around it and push it to the array as is
  if(match && re.lastIndex < argString.length) {
    const re2 = /^("|')([^]*)\1$/g
    result.push(argString.substr(re.lastIndex).replace(re2, '$2'))
  }
  return result
}
export default parseArgs
