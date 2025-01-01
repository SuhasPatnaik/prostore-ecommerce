const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const priceInString = value.toFixed(2);
  const [integralValue, fractionalValue] = priceInString.split(".");

  return (
    <>
      <p className="text-2xl">
        <span className="text-xs align-super">$</span>
        {integralValue}
        <span className="text-xs align-super">.{fractionalValue}</span>
      </p>
    </>
  );
};

export default ProductPrice;
