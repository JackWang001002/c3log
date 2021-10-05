function log() {
  const location: Record<string, number> = {};
  return (...args: unknown[]) => {
    try {
      throw new Error('');
    } catch (e: any) {
      const str = e.stack.split('\n')[2];
      const match = str.match(/at (?<func>.*) \(.*?:(?<line>.*):/);
      const { func } = match?.groups || {};
      if (location[func] === undefined) {
        location[func] = 1;
      } else {
        location[func]++;
      }
      const result = `[${func}:${location[func]}]`;
      console.log(`%c==> ${result}`, 'color:red', ...args);
      if (__DEV__) {
        return `${result}-${args.join()}`;
      }
    }
  };
}
export default log;
