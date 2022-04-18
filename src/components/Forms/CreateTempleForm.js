import React, { useEffect, useState, useRef } from "react";
import StepOne from "./Information";
import StepTwo from "./Location";
import StepThree from "./FactsAndHistory";
import StepFour from "./Gallery";
import StepFive from "./AartiDetails";
import StepSix from "./Vedas";
import StepSeven from "./SpecialPoojas";
import StepEight from "./AssociatedPoojari";
import Final from "./Preview";
function CreateTempleForm() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    templeTitle: "",
    headPoojari: "",
    trustName: "",
    templeDescription: "",
    templePostalCode: "",
    templeStreet: "",
    templeVedaTitle1: "",
    templeVedaDescription1: "",
    templeVedaTitle2: "",
    templeVedaDescription2: "",
    templeVedaTitle3: "",
    templeVedaDescription3: "",
    templePoojaTitle1: "",
    templePoojaDescription1: "",
    templePoojaTitle2: "",
    templePoojaDescription2: "",
    templePoojaTitle3: "",
    templePoojaDescription3: "",
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 1:
      return (
        <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
      );
    // case 2 to show stepTwo form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 2:
      return (
        <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // case 3 to show stepThree form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 3:
      return (
        <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // case 4 to show stepThree form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 4:
      return (
        <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // case 5 to show stepThree form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 5:
      return (
        <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // case 6 to show stepThree form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 6:
      return (
        <StepSix nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // case 7 to show stepThree form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 7:
      return (
        <StepSeven nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // case 8 to show stepThree form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 8:
      return (
        <StepEight nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      );
    // Only formData is passed as prop to show the final value at form submit
    case 9:
      return (
        <Final values={formData}  />
      );
    // default case to show nothing
    default:
  return (
    <section>
    </section>
  );
}
}
export default CreateTempleForm;