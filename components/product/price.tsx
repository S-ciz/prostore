export default function Price({ price }: { price: number }) {

    const fixedPrice = price.toFixed(2);

  const [intValue, floatValue] = fixedPrice.toString().split(".");
  return (
    <div className="flex">
      <small>$ </small>
      <span> <h1 className="text-2xl">{intValue}</h1></span>
     <small>{Number(floatValue)}</small>
    </div>
  );
}
