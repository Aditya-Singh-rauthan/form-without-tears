import React, { useState } from "react";

function Field(props) {
  const { style, field, value, setValue, type, ...rest } = props || {};
  const { error, setError } = useState("");
  const onChangeText = (e) => {
    setValue && setValue({ field, value: e.target.value });
    if (type === "email") {
      console.log('>>>one')
      validateEmail();
    }
  };
  const validateEmail = (e) => {
    let email = e.target.value;
    let validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    console.log('>>>>>validEmail',validEmail)
    if (!validEmail) {
      setError("Email is not in valid format!!!");
    }
  };
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 10,
        alignItems: "flex-start",
        border: "1px solid green",
      }}
    >
      <input
        style={{
          padding: 10,
          paddingLeft: 5,
          border: "none",
          outlineColor: "ActiveBorder",
          borderBottom: "1px solid gray",
          //   flex: 1,
          ...style,
        }}
        type={type || "text"}
        placeholder="Input Name"
        name="textInput"
        value={value}
        onChange={(e) => onChangeText(e)}
        {...rest}
      />
      <FieldError
        error={error}
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      />
    </div>
  );
}

export const FieldError = (props) => {
  const { error, style } = props || {};
  return (
    <div style={{ ...style }}>
      <p
        style={{
          color: "red",
          fontSize: 11,
          marginTop: 5,
        }}
      >
        {error}
      </p>
    </div>
  );
};

export default Field;
