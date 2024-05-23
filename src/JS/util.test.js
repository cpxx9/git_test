import { generateText } from './util';

test('output name and age as string', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('output dataless string', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});
