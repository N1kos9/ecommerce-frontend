"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  const downloadFiles = () => {
    // Create anchor tags for each file
    const link1 = document.createElement("a");
    link1.href = "AI_COLLECTION_PACK_1.pdf";
    link1.download = "AI_COLLECTION_PACK_1.pdf";
    link1.target = "_blank"; // Open in a new tab
    document.body.appendChild(link1);

    const link2 = document.createElement("a");
    link2.href = "BEGINNERS_FAST_TRACK_TO_WEALTH_-_EBOOK_PDF_2_1_1_1_1_1.pdf";
    link2.download =
      "BEGINNERS_FAST_TRACK_TO_WEALTH_-_EBOOK_PDF_2_1_1_1_1_1.pdf";
    link2.target = "_blank"; // Open in a new tab
    document.body.appendChild(link2);

    // Trigger the click event for each anchor tag
    link1.click();
    link2.click();

    // Clean up: remove the dynamically created anchor tags from the DOM
    document.body.removeChild(link1);
    document.body.removeChild(link2);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 text-white">
      <p className="text-heading4-bold">Successful Payment</p>
      <p>Thank you for your purchase</p>

      <button onClick={downloadFiles} className="p-4 text-[2rem] border">
        Download the eBooks
      </button>
      {/* <Link
        href="/"
        className="p-4 mt-8 border text-base-bold hover:bg-black hover:text-white"
      >
        CONTINUE TO SHOPPING
      </Link> */}
    </div>
  );
};

export default SuccessfulPayment;
