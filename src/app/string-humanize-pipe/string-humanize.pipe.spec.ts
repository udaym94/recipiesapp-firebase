import { StringHumanizePipe } from './string-humanize.pipe';

describe('StringHumanizePipe', () => {
  it('create an instance', () => {
    const pipe = new StringHumanizePipe();
    expect(pipe).toBeTruthy();
  });
});
