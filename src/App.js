import "./App.css";
import ModalProvider from "./ModalContext";
import ModalComponent from "./ModalComponent";
import StepperComponent from "./StepperComponent";
import TriggerModalButton from "./TriggerModalButton";

function App() {
  return (
    <ModalProvider>
      <ModalComponent>
        <StepperComponent />
      </ModalComponent>
      <TriggerModalButton />
    </ModalProvider>
  );
}

export default App;
