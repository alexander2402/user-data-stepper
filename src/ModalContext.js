import React, { useContext, useState } from "react";

const ModalContext = React.createContext();
const UpdateModalContext = React.createContext();

export function useModal() {
  return useContext(ModalContext)
}

export function useUpdateModal() {
  return useContext(UpdateModalContext)
}

export default function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    console.log('finally here');
    setIsModalOpen((prev) => !prev);
  }

  return (
    <ModalContext.Provider value={isModalOpen}>
      <UpdateModalContext.Provider value={toggleModal}>
        {children}
      </UpdateModalContext.Provider>
    </ModalContext.Provider>
  );
}
