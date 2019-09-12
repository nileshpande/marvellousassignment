import { MymultPipe } from './mymult.pipe';

describe('MymultPipe', () => {
  it('create an instance', () => {
    const pipe = new MymultPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('Pipe: MymultPipe', () => {
  it('should add both parameters', () => {
    let mymult = new MymultPipe();
    expect(mymult.transform(12,5)).toEqual(60);
  });

});