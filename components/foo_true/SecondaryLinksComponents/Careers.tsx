import Link from "next/link";
import React from "react";

type Props = {};

export default function Careers({ }: Props) {
  return (
    <>
      <ul className="inline-block">
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/"
          >
            Culture and Values
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://stories.starbucks.com/stories/inclusion-diversity/"
          >
            Inclusion, Diversity, and Equity
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/careers/working-at-starbucks/education/"
          >
            College Achievement Plan
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://alumni.starbucks.com/"
          >
            Alumni Community
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/careers/"
          >
            U.S. Careers
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/careers/international-careers/"
          >
            International Careers
          </Link>
        </li>
      </ul>
    </>
  );
}
