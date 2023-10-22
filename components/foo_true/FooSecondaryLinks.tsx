import Link from "next/link";
import React from "react";

type Props = {};

const style = {
  li: "items-center flex text-center",
  fa: "block  mb-1 py-2 lg:mb-0 lg:py-0 lg:pr-3",
  a: "block  m-0 py-4 lg-mb-0 lg:py-0 lg:px-3 text-left",
  span: "text-gray-600 px-2 hidden lg:inline-block",
};

export default function FooSecondaryLinks({ }: Props) {
  return (
    <ul className=" mt-3 lg:mb-1 flex xl:flex-row lg:flex-row  flex-col">
      <li className={style.li}>
        <Link
          className={style.fa}
          href="https://www.starbucks.com/terms/privacy-policy/"
        >
          Privacy Notice
        </Link>
      </li>
      <li className={style.li}>
        <span aria-hidden="true" className={style.span}>
          |
        </span>
        <Link
          className={style.a}
          href="https://www.starbucks.com/terms/starbucks-terms-of-use/"
        >
          Terms of Use
        </Link>
      </li>
      <li className={style.li}>
        <span aria-hidden="true" className={style.span}>
          |
        </span>
        <Link
          className={style.a}
          href="https://www.starbucks.com/personal-information"
          id="personal-information"
        >
          Do Not Share My Personal Information
        </Link>
      </li>
      <li className={style.li}>
        <span aria-hidden="true" className={style.span}>
          |
        </span>
        <Link
          className={style.a}
          href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"
        >
          CA Supply Chain Act
        </Link>
      </li>
      <li className={style.li}>
        <span aria-hidden="true" className={style.span}>
          |
        </span>
        <button className={style.a}>Cookie Preferences</button>
      </li>
    </ul>
  );
}
