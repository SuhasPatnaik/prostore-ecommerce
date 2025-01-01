import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card>
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            priority={true}
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            className="rounded"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="flex-between">
          <p>{product.rating} stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">${product.price}</p>
          ) : (
            <p className="text-destructive">Out of stock!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;