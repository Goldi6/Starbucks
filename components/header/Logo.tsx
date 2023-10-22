import React from "react";
import CompanyLogo from "@/public/logo.svg";
import Image from "next/image";

type Props = {};

export default function Logo({ }: Props) {
  return (
    <a id="nav-logo" href='/'>
      <Image
        src={CompanyLogo}
        alt="company logo"
        width={51}
        height={51}
        style={{ height: "100%", width: "auto" }}
      />
    </a>
  );
}
