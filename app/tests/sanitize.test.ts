import { sanitize } from '../lib/helpers/html-processing/sanitize';
import { UntrustedHTML } from '../types/html';

describe('sanitize', () => {
  it('should remove script tags from the input HTML', () => {
    const unsanitizedHtml: UntrustedHTML =
      "<div onclick='alert(1)'>Click me</div><script>alert('XSS')</script>";
    const sanitizedHtml = sanitize(unsanitizedHtml);
    expect(sanitizedHtml).not.toContain('<script>');
    expect(sanitizedHtml).toContain('<div>Click me</div>');
  });

  it('should allow safe HTML tags', () => {
    const unsanitizedHtml: UntrustedHTML = '<b>Bold</b><i>Italic</i>';
    const sanitizedHtml = sanitize(unsanitizedHtml);
    expect(sanitizedHtml).toContain('<b>Bold</b>');
    expect(sanitizedHtml).toContain('<i>Italic</i>');
  });

  it('should remove dangerous attributes', () => {
    const unsanitizedHtml: UntrustedHTML =
      '<img src="image.jpg" onerror="alert(1)" />';
    const sanitizedHtml = sanitize(unsanitizedHtml);
    expect(sanitizedHtml).toContain('<img src="image.jpg"');
    expect(sanitizedHtml).not.toContain('onerror');
  });
});
