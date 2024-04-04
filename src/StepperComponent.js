import { useState } from "react";
import { useModal, useUpdateModal, MODAL_ACTIONS } from "./ModalContext.js";
import { FormTypes, Forms, UserSteps } from "./consts.js";

const STEPPER_ACTIONS = {
  BACK: "back",
  NEXT: "next",
  SUBMIT: "submit",
};

export default function StepperComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState(null);
  console.log(userData);
  //   const [disabledNext, setDisabledNext] = useState(false);
  const step = UserSteps[currentStep];

  function handleUpdate(action) {
    switch (action) {
      case STEPPER_ACTIONS.NEXT: {
        setCurrentStep((prev) => prev + 1);
        break;
      }
      case STEPPER_ACTIONS.BACK: {
        setCurrentStep((prev) => prev - 1);
        break;
      }
      case STEPPER_ACTIONS.SUBMIT: {
        localStorage.setItem('userInfo', JSON.stringify(userData));
        break;
      }
      default:
        break;
    }
  }

  const disabledBack = currentStep === 0;

  function onInputChange(event) {
    const updatedField = event.target.name;
    const updatedFieldValue = event.target.value;
    setUserData({ ...userData, [updatedField]: updatedFieldValue });
    //     setDisabledNext(validateInput(step.formType, event.target.name, event.target.value);)
  }

  return (
    <>
      {step && (
        <div>
          <div>{step.name}</div>
          <div>{step.stepDescription}</div>
          {currentStep === UserSteps.length - 1 && <pre>{JSON.stringify(userData, undefined, 2)}</pre>}
          <div>
            {step.formType &&
              Forms[step.formType].map((inputConfig) => {
                return (
                  <input
                    {...inputConfig}
                    key={inputConfig.name}
                    onChange={onInputChange}
                  ></input>
                );
              })}
          </div>
        </div>
      )}
      {
        <button
          className="modal-close"
          onClick={() => handleUpdate(STEPPER_ACTIONS.BACK)}
          disabled={disabledBack}
          style={disabledBack ? { pointerEvents: "none" } : {}}
        >
          Back
        </button>
      }
      {currentStep !== UserSteps.length - 1 ? (
        <button
          className="modal-close"
          onClick={() => handleUpdate(STEPPER_ACTIONS.NEXT)}
          //   disabled={disabledNext}
          //   style={disabledNext ? { pointerEvents: "none" } : {}}
        >
          Next
        </button>
      ) : (
        <button
          className="modal-close"
          onClick={() => handleUpdate(STEPPER_ACTIONS.SUBMIT)}
        >
          Submit
        </button>
      )}
    </>
  );
}
