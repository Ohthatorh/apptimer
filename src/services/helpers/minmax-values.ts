export type MinMaxValues = {
  [key: string]: {
    [N: string]: {
      min: string;
      max: string;
    };
  };
};

export const MIN_MAX_VALUES: MinMaxValues = {
  rounds: {
    count: {
      min: "1",
      max: "99",
    },
    time: {
      min: "00",
      max: "60",
    },
  },
  explosion: {
    count: {
      min: "1",
      max: "9",
    },
    time: {
      min: "00",
      max: "60",
    },
  },
  preparation: {
    time: {
      min: "00",
      max: "60",
    },
  },
  rest: {
    time: {
      min: "00",
      max: "60",
    },
  },
};
