import React, { useEffect, useState, useRef } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Final from "./Preview";
function AddBlogForm() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    blogTitle: "",
    blogSubtitle: "",
    blogTag: "",
    blogDescription: ""
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
    // Only formData is passed as prop to show the final value at form submit
    case 4:
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
export default AddBlogForm;