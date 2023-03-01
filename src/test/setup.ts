beforeEach(async () => {
  jest.clearAllMocks();
});

declare namespace jest {
  interface Matchers<R> {
    toBeDistinct(): CustomMatcherResult;
  }
}
expect.extend({
  toBeDistinct(received) {
    const uniqueCardValuesSet = new Set();
    for (let i = 0; i < received.length; i++) {
      if (!uniqueCardValuesSet.has(received[i].numericValue)) {
        uniqueCardValuesSet.add(received[i].numericValue);
      } else {
        return {
          message: () => `Array has duplicate values`,
          pass: false,
        };
      }
    }

    return {
      message: () => `Array has no duplicate values`,
      pass: true,
    };
  },
});
