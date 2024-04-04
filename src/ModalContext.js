import React, { useContext, useState } from "react";

const ModalContext = React.createContext();
const UpdateModalContext = React.createContext();

export const MODAL_ACTIONS = {
  OPEN: "open",
  CLOSE: "close",
};

export function useModal() {
  return useContext(ModalContext);
}

export function useUpdateModal() {
  return useContext(UpdateModalContext);
}

export default function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function updateModal(action) {
    switch (action) {
      case MODAL_ACTIONS.OPEN: {
        setIsModalOpen(true);
        break;
      }
      case MODAL_ACTIONS.CLOSE: {
        setIsModalOpen(false);
        break;
      }
      default:
        break;
    }
  }

  return (
    <ModalContext.Provider value={ isModalOpen }>
      <UpdateModalContext.Provider value={updateModal}>
        {children}
      </UpdateModalContext.Provider>
    </ModalContext.Provider>
  );
}
