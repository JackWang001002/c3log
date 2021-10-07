interface IOptions {
  showIndex?: boolean
}

function log({ showIndex }: IOptions = { showIndex: true }) {
  const location: Record<string, number> = {};
  return (...args: unknown[]) => {
    const str = (new Error() as any).stack.split('\n')[2];
    const match = str.match(/at (?<func>.*) \(.*?:(?<line>.*):/);
    const { func } = match?.groups || {};
    if (location[func] === undefined) {
      location[func] = 1;
    } else {
      location[func]++;
    }
    const result = `[${func}:${showIndex ? location[func] + ':' : ''}]`;
    console.log(`%c==> ${result}`, 'color:red', ...args);
    if (__DEV__) {
      return `${result}-${args.join()}`;
    }
  }
};

export default log;
