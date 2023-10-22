import Link from "next/link";
import React from "react";

type Props = {};

export default function OrderAndPickup({ }: Props) {
  return (
    <>
      <ul className="inline-block">
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/rewards/mobile-apps/"
          >
            Order on the App
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/menu"
          >
            Order on the Web
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/ways-to-order/delivery/"
            target="_blank"
          >
            Delivery
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/ways-to-order/"
          >
            Order and Pick Up Options
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer"
            target="_blank"
          >
            Explore and Find Coffee for Home
          </Link>
        </li>
      </ul>
    </>
  );
}
