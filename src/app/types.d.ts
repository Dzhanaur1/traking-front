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
type OrderType = {
  id: number;
  from_location: string;
  to_location: string;
  date: string;
  time: string;
  type_of_transport: string;
  type_of_cargo: string;
  phone: string;
  status: string;
  price: number;
};
