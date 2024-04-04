import { useModal, useUpdateModal, MODAL_ACTIONS } from "./ModalContext.js";

export default function TriggerModalButton() {
  // const isModalOpen = useModal();
  const updateModal = useUpdateModal();

  return (
    <>
      <button className="modal-close" onClick={() => updateModal(MODAL_ACTIONS.OPEN)}>
        Open
      </button>
    </>
  );
}
