export type MainProps = {
  content: BlockProps[];
};

export type BlockProps = {
  content: {
    id: string;
    alt: string;
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    imgSrc: string;
    bgColor: string;
    color: string;
  };
  blockClass: string;
};
