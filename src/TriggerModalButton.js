import { useModal, useUpdateModal } from "./ModalContext.js";

export default function TriggerModalButton() {
  const isModalOpen = useModal();
  const toggleModal = useUpdateModal();

  return (
    <>
      <button className="modal-close" onClick={toggleModal}>
        Open
      </button>
    </>
  );
}
