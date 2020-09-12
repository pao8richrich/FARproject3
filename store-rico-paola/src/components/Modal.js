import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import '../App.css';

const modalRoot = document.getElementById("modal");

const Modal = (props) => {
  const element = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return createPortal(<div>{props.children}</div>, element);
};

export default Modal;