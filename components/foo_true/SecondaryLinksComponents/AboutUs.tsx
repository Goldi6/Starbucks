import Link from "next/link";
import React from "react";

type Props = {};

export default function AboutUs({ }: Props) {
  return (
    <>
      <ul className="inline-block">
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/about-us/"
          >
            Our Company
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/coffee/"
          >
            Our Coffee
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://stories.starbucks.com/"
          >
            Stories and News
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://archive.starbucks.com/"
          >
            Starbucks Archive
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://investor.starbucks.com"
          >
            Investor Relations
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://customerservice.starbucks.com/"
          >
            Customer Service
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/contact/"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}
