import log from '.';
describe('test cases', () => {
  it('should show function name and index', () => {
    function foo() {
      expect(log()).toEqual({ fun: 'foo', args: [] });
      expect(log(1, 2)).toEqual({ fun: 'foo', args: [1, 2] });
    }
    foo();
  });
  it.skip('should show class and function name and index', () => {
    //@note: the line number is not accurate
    class Animal {
      foo() {
        expect(log()).toEqual({ fun: 'Animal.foo', args: [] });
        expect(log(1, 2)).toEqual({ fun: 'Animal.foo', args: [1, 2] });
      }
    }
    new Animal().foo();
  });
});
