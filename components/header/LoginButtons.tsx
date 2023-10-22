import React from "react";
import { headStyle } from "../Header";

type Props = {};

export default function LoginButtons({}: Props) {
  return (
    <>
      <div className="flex gap-4">
        <a className="button " href="#">
          {/* <svg
                  className={headStyle.additionalLinkIcon}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0z"></path>
                    <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm0 4a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"></path>
                  </g>
                </svg> */}
          <span className={headStyle.additionalLinkText}>Sign in</span>
        </a>
        <a
          className="button"
          href="#"
          style={{ color: "#fff", background: "#000" }}
        >
          {/* <svg
                  className={headStyle.additionalLinkIcon}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path d="M0 0h24v24H0z"></path>
                    <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2a8 8 0 100 16 8 8 0 000-16zm0 4a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"></path>
                  </g>
                </svg> */}
          <span className={headStyle.additionalLinkText}>Join now</span>
        </a>
      </div>
    </>
  );
}
