import React, { useState } from "react";
import Field from "../Field/Field";

function Form(props) {
  const [formData, setFormData] = useState({});
  const setValue = ({ field, value }) => {
    console.log('>>>>>>',field,value)
    setFormData({ ...formData, [field]: value });
  };
  console.log('>>>>formDAta',formData)
  let { name,email } = formData;
  return (
    <form>
      <Field field={"email"} type={"email"} value={email} setValue={setValue}/>
    </form>
  );
}

export default Form;
