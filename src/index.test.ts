import log from '.';
describe('test cases', () => {
  it('should show function name and index', () => {
    //@note: the line number is not accurate
    function foo() {
      const logX = log()
      expect(logX()).toBe('[foo:1:]-');
      expect(logX(1, 2)).toBe('[foo:2:]-1,2');
    }
    foo();
  });
  it('should show class and function name and index', () => {
    //@note: the line number is not accurate
    class Animal {
      foo() {
        const logX = log()
        expect(logX()).toBe('[Animal.foo:1:]-');
        expect(logX(1, 2)).toBe('[Animal.foo:2:]-1,2');
      }
    }
    new Animal().foo();
  });
  it.todo(('should work when showIndex is false'))
  it.skip('should customize style', function () {
    it('log.text().color().bg()', () => { });
  });
  it.todo('should have default behavior, such as warn/info/debug  ');
});
