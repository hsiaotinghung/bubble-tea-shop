import React from "react";

const ModalContext = React.createContext({
  show: () => {},
  hide: () => {},
  modalIsShown: false,
});

export default ModalContext;
