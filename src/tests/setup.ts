import '@testing-library/jest-dom';

// Mock scrollTo since jsdom does not implement it
if (typeof window !== 'undefined') {
  window.scrollTo = () => {};
}
