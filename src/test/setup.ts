import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement IntersectionObserver / ResizeObserver, both of
// which Framer Motion's `whileInView` and layout animations rely on.
// Minimal no-op stubs are enough for tests that don't assert on scroll
// reveal timing.
class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

// @ts-expect-error - partial stub is sufficient for jsdom test environment
globalThis.IntersectionObserver = MockObserver;
globalThis.ResizeObserver = MockObserver;
