import Link from "next/link";
import React from "react";

type Props = {};

export default function ForBusinessPartners({ }: Props) {
  return (
    <>
      <ul className="inline-block">
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/business/landlord-faq/"
          >
            Landlord Support Center
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/business/suppliers/"
          >
            Suppliers
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbuckscardb2b.com/"
            target="_blank"
          >
            Corporate Gift Card Sales
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program"
          >
            Office and Foodservice Coffee
          </Link>
        </li>
      </ul>
    </>
  );
}
