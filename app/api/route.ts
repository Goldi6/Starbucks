import { NextRequest, NextResponse } from "next/server";

type Content = {
  id: string;
  imgSrc: string;
  alt: string;
  title: string;
  text: string;
  button: string;
  buttonLink: string;
  bgColor: string;
  color: string;
};

type obj = {
  content: Content;
  blockClass: string;
};

type ResponseData = obj[];

export async function GET(
  request: Request | NextRequest,
  response: Response | NextResponse
) {
  const data = [
    {
      content: {
        id: "137-85876",
        imgSrc:
          "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85868.jpg",
        alt: "An espresso drink in a tall glass with a deep layer of creaminess on top.",
        title: "New apple in the bunch",
        text: "Introducing our Iced Apple Crisp Oatmilk Shaken Espresso with a perfectly balanced taste.",
        button: "Order now",
        buttonLink: "https://www.starbucks.com/menu/product/2123773/iced",
        bgColor: "#76232f",
        color: "#fff",
      },
      blockClass: "",
    },
    {
      content: {
        id: "137-85878",
        imgSrc:
          "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85869.jpg",
        alt: "The top half of an iced, creamy tea drink with a layer of foaminess in a tall glass.",
        title: "Good idea, chai lovers",
        text: "Try the new coffee-free Iced Pumpkin Cream Chai Tea Latte, inspired by our customers. It’s fall in a cup.",
        button: "Order now",
        buttonLink: "https://www.starbucks.com/menu/product/2123774/iced",
        bgColor: "#b04a5a",
        color: "#fff",
      },
      blockClass: "",
    },
    {
      content: {
        id: "137-85880",
        imgSrc:
          "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85870.jpg",
        alt: "A round, flaky pastry with a wavy texture on top set against a geometric pattern.",
        title: "Pastry fans, rejoice",
        text: "Say hello to the new Baked Apple Croissant filled with warm apple filling.",
        button: "Order now",
        buttonLink: "https://www.starbucks.com/menu/product/2123771/single",
        bgColor: "#b04a5a",
        color: "#fff",
      },
      blockClass: "",
    },
    {
      content: {
        id: "137-85883",
        imgSrc:
          "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85875.jpg",
        alt: "Hand holding mobile phone with Starbucks mobile app on screen ordering a Pumpkin Cream Cold Brew in front of a multi-colored wave.",
        title: "Tap into your fall routine",
        text: "The Starbucks app makes pickup a breeze when you order ahead.",
        button: "Download now",
        buttonLink: "https://www.starbucks.com/account/create",
        bgColor: "#006241",
        color: "#fff",
      },
      blockClass: "small-card",
    },
  ];

  return new Response(JSON.stringify(data));
}
