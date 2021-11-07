function log(...args: unknown[]) {
  const stack = (new Error() as any).stack.split('\n');
  const reg = /at (?<fun>.+?) .*?(?<file>[^/]+?:\d+)/
  let match = stack[2].match(reg)
  if (!match) {
    //NOTE: there is a anonymous function
    match = (stack[3] && stack[3].match(reg)) ?? { "groups": { fun: 'unknown', file: 'unknown' } }
  }
  const { fun, file } = match["groups"];
  const text = `===>[${file}:${fun}()]`
  let outputs = [`%c ${text}`, 'color:red']
  if (typeof window === 'undefined') {
    outputs = [`\x1B[31m${text}\x1B[39m`]//TODO: judge the color support
  }
  console.log(...outputs, ...args)

  if (__DEV__) {
    return { fun, file, args }
  }

};

export default log;
