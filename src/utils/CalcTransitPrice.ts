export type calcTransitPriceProps = {
  distance: number;
  typeCoef?: number;
  transportCoef?: number;
};

export const calcTransitPrice = (props: calcTransitPriceProps) => {
  const typeCoef = props.typeCoef || 1;
  const transportCoef = props.transportCoef || 1;
  const price = props.distance * typeCoef * transportCoef * 4!;
  return price;
};
