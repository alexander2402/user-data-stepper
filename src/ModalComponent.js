import { useModal, useUpdateModal } from "./ModalContext.js";

export default function ModalComponent() {
  const isModalOpen = useModal();
  const toggleModal = useUpdateModal();

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">{'children'}</div>
            <button className="modal-close" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
