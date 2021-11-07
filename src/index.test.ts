import log from '.';
describe('test cases', () => {

  it('should show function name and index', () => {
    function foo() {
      const res = log()
      expect(res?.fun).toEqual('foo');
    }
    foo();

  });
  it('anonymous function', () => {
    //anonymous function
    (() => {
      const res = log()
      expect(res?.fun).toEqual('Object.<anonymous>');
    })()
  })
  it('should show class and function name and index', () => {
    //@note: the line number is not accurate
    class Animal {
      foo() {
        let res = log()
        expect(res?.fun).toEqual('Animal.foo');
      }
    }
    new Animal().foo();
  });
});
