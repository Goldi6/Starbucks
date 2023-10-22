import React from "react";
import Image from "next/image";
import './style.scss'
import { BlockProps } from "./types";
import Link from "next/link";

export default function Block({ content, blockClass }: BlockProps) {
  const { id, title, text, buttonLink, button, imgSrc, bgColor, alt, color } =
    content;
  return (
    <>

      <div className="" id={id}>
        <div className="main-block">
          <div className={`md:flex md:text-[24px] text-[24px] ${blockClass}`}>
            <div
              className="flex justify-center items-center md:w-1/2 sm:w-full"
              style={{ backgroundColor: bgColor, height: "auto" }}
            >
              <Image
                alt={alt}
                className="block"
                src={imgSrc}
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
                priority={true}
              />
            </div>
            <div
              className="card-text-content-block py-8 px-4  md:py-12 flex items-center md:w-1/2 justify-center text-center border-box"
              style={{ backgroundColor: bgColor, color: color }}
            >
              <div className="">
                <h1
                  className=" mb-4 font-[500] lg:text-[50px] text-[28px]"
                  tabIndex={-1}
                  style={{ color: color }}
                >
                  <span className="">{title}</span>
                </h1>
                <div className="block-text mb-8" style={{ color: color }}>
                  {text}
                </div>
                <Link
                  className="button"
                  href={buttonLink}
                  style={{
                    minWidth: 35,
                    minHeight: 35,
                    color: color,
                    borderColor: color,
                  }}
                >
                  {button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
