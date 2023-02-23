import {hello} from '.';

describe('test hello function', () => {
  it('should return Hello', () => {
    expect(hello('World')).toBe('Hello World!');
  });
});
