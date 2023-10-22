import Link from "next/link";
import React from "react";

type Props = {};

export default function SocialImpact({ }: Props) {
  return (
    <>
      <ul className="inline-block">
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://starbucks.com/responsibility/people/"
          >
            People
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://starbucks.com/responsibility/planet/"
          >
            Planet
          </Link>
        </li>
        <li className="">
          <Link
            className="block mb2 py2 text-noUnderline sb-footer-primaryLinks null-pr0"
            href="https://www.starbucks.com/responsibility/reporting-hub/"
          >
            Environmental and Social Impact Reporting
          </Link>
        </li>
      </ul>
    </>
  );
}
