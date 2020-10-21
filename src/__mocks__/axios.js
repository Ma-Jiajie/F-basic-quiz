export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "get" } })),
  post: jest.fn(() => Promise.resolve({ data: { name: "post" } })),
};
