import "./App.css";
import ModalProvider from "./ModalContext";
import ModalComponent from "./ModalComponent";
import TriggerModalButton from "./TriggerModalButton";

function App() {
  return (
    <ModalProvider>
      <ModalComponent />
      <TriggerModalButton />
    </ModalProvider>
  );
}

export default App;
