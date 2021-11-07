function log(...args: unknown[]) {
  const stack = (new Error() as any).stack.split('\n');
  const fnReg = /(?<=at ).+?(?=[ $])/;
  let match = stack[2].match(fnReg)
  if (!match) {
    match = stack[3] ? stack[3].match(fnReg) : 'anonymous'
  }
  const funcName = match && match[0];
  let outputs = [`%c ===>[${funcName}]`, 'color:red']
  if (typeof window === 'undefined') {
    outputs = [`\x1B[31m===>[${funcName}]\x1B[39m`]//TODO:
  }
  console.log(...outputs, ...args)

  if (__DEV__) {
    return { fun: funcName, args }
  }

};

export default log;
