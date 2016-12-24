/**
* Parses an argument string into an array of arguments
* @param {string} argString - The argument string to parse
* @return {string[]} The array of arguments
*/
export function parseArgs(argString: string): string[] {
  var result: string[] = []
  argString = argString.trim() + '" '

  var part: string = ""
  var withinQuotes: boolean = false
  function pushIfNotEmpty() {
    if(part.length > 0) {
      result.push(part)
      part = ""
    }
  }

  for(let i = 0; i < argString.length; i++) {
    var currentChar = argString[i]
    if(currentChar == ' ' && !withinQuotes) {
      pushIfNotEmpty()
      continue
    }
    if(currentChar == '"') {
      pushIfNotEmpty()
      withinQuotes = !withinQuotes
      continue
    }
    part += currentChar
  }

  return result
}
