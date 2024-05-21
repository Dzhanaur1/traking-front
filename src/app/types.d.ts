type Cities = {
  suggestions: [
    {
      value: string;
      data: {
        city: string;
      };
    }
  ];
};

type DadataFetch = {
  query: string;
  count: number;
  locations: Array<T>;
};

type MatrixDistanceResponse = {
  rows: [
    {
      elements: [
        {
          distance: {
            text: string;
            value: number;
          };
        }
      ];
    }
  ];
};
