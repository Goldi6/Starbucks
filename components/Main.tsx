import React from "react";
import Block from "./main/Block";

import { MainProps } from "./main/types";

export default function Main({ content }: MainProps) {
  return (
    <main style={{ minHeight: "100vh" }} className="flex flex-col  gap-8 py-8 ">
      <div style={{ maxWidth: '1440px', margin: 'auto' }}>
        {content.map((item, i) => {
          item.blockClass +=
            i % 2 === 0 ? " md:flex-row-reverse" : " md:flex-row";
          return <Block key={i} {...item} />;
        })}
      </div>
    </main>
  );
}
