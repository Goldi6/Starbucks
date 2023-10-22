"use client";
import { useRef, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ExpanderMenu({ title, children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const expanderBtnStyle =
    "flex w-full items-center justify-between py-2 mb-2 sm:mb-3";

  return (
    <>
      <div>
        <h2 className="text-lg">
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-controls="caretExpander1"
            aria-expanded="false"
            className={expanderBtnStyle}
          >
            <span className="text-left">{title}</span>
            <svg
              aria-hidden="true"
              className="lg:hidden"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: 32,
                height: 32,
                overflow: "visible",
                fill: "currentColor",
              }}
              viewBox="0 0 24 24"
            >
              <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232" />
            </svg>
          </button>
        </h2>
        {/* expander */}

        <div
          ref={navRef}
          className="overflow-hidden transition-height duration-500"
          style={
            isExpanded
              ? { height: navRef.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}
