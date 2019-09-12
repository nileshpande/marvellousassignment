import { MyrevPipe } from './myrev.pipe';

describe('MyrevPipe', () => {
  it('create an instance', () => {
    const pipe = new MyrevPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Pipe: MyrevPipe', () => {
  it('should add both parameters', () => {
    let myrev = new MyrevPipe();
    expect(myrev.transform("Nil")).toEqual("liN");
  });

});