function log(...args: unknown[]) {
  const match = (new Error() as any).stack.split('\n')[2].match(/(?<=at )\w+?(?=[ $])/)
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
