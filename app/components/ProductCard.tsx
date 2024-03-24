"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <>
      <Link
        href={`/products/${product._id}`}
        className="w-[400px] flex flex-col gap-2 "
      >
        <div className="w-full h-full">
          <div className="text-[#0d2503] bg-[#0d2503] bg-transparent shadow-glowingSmallerBox rounded-xl border border-white/[0.9]">
            <Image
              src={product.media[0]}
              alt="product"
              width={550}
              height={550}
              className="h-[250px] w-full object-cover rounded-xl "
            />
          </div>
          <div id="pricing" className=" text-center">
            <p className="text-base-bold text-[2.5em] mt-2">{product.title}</p>
            <p className="text-small-medium text-grey-2 mt-2">
              {product.category}
            </p>
          </div>
          <div className="flex justify-center items-center text-center text-[4rem] mt-2">
            <p className="text-body-bold text-center text-[#226109]">
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
