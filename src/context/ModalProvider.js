import { useState } from "react";

import ModalContext from "./modalContext";

const ModalProvider = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const modalContext = {
    modalIsShown,
    show: showModalHandler,
    hide: hideModalHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
