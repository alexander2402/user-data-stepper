import { useModal, useUpdateModal, MODAL_ACTIONS } from "./ModalContext.js";

export default function ModalComponent({ children }) {
  const isModalOpen = useModal();

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
