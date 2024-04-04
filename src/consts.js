export const FormTypes = {
  UserFullName: 1,
  UserAge: 2,
};

export const Forms = {
    // fields settings
  [FormTypes.UserFullName]: [
    {name: 'firstName', type: 'text', minLength: 0, maxLength: 100, required: true},
    {name: 'lastName', type: 'text', minLength: 0, maxLength: 100, required: true}
  ],
  [FormTypes.UserAge]: [
    {name: 'age', type: 'number', min: 0, max: 120, required: true},
  ],
};

export const UserSteps = [
    {
      name: "Full Name:",
      stepDescription: "",
      formType: FormTypes.UserFullName,
    },
    {
      name: "Age:",
      stepDescription: "",
      formType: FormTypes.UserAge,
    },
    {
      name: "Your profile info. Submit if correct.",
      stepDescription: "",
    },
  ];

//   export const validateInput = (formType, fieldName, fieldValue) => {
//     let valid = true;
//     Forms[formType].map((field) => (field.name === fieldName && {
//         if (field.minLength) {
//             if (fieldValue && fieldValue.length < field.minLength) {
//                 valid = false;
//             }
//         }
//     }));
//     return valid;
//   }
