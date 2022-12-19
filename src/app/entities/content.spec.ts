import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notifications content', () => {
    const content = new Content('Você rebeu uma solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('should be able to create a notifications content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrowError();
  });

  it('should be able to create a notifications content with more than 5 characters', () => {
    expect(() => new Content('a'.repeat(242))).toThrowError();
  });
});
