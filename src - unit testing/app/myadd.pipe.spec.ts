import { MyaddPipe } from './myadd.pipe';

describe('MyaddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyaddPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Pipe: MyaddPipe', () => {
  it('should add both parameters', () => {
    let myaddpipe = new MyaddPipe();
    expect(myaddpipe.transform(12,5)).toEqual(17);
  });

});
