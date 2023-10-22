"use client";
import { useEffect, useState } from "react";
import { ModalStyled } from "./Modal.styled";


type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

export default function Modal({ children, isOpen }: Props) {
  const [ classN, setClassN ] = useState("");

  function openModal() {
    setClassN("before-closed");
    setTimeout(() => {
      setClassN("closed");
      document.body.style.overflow = "unset";
    }, 500);
  }

  function closeModal() {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }

    setClassN("");
  }

  useEffect(() => {
    if (isOpen) closeModal();
    else openModal();
  }, [ isOpen ]);

  return (
    <>
      <ModalStyled className={`lg:hidden  ${classN}`}>{children}</ModalStyled>
    </>
  );
}
