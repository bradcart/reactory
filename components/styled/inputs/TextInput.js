import React, { useState, useEffect } from "react";
import { styled } from "../../../stitches.config";

import { StyledBox } from "../StyledBox";
import { StyledText } from "../StyledText";

/* Generic form input that submits when Enter key is pressed or another element in settings panel is clicked */

export const TextInput = ({ initialValue, updateValue, formId, formLabel }) => {
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   const listener = (event) => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       handleSubmit(event);
  //     }
  //   };

  //   if (active) {
  //     document.addEventListener("keydown", listener);
  //   } else {
  //     document.removeEventListener("keydown", listener);
  //   }
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setActive(false);
    // if (e.target.value !== initialValue) {
    updateValue(e.target.value);
    // }
  };

  // const Input = () => (
  //   <input
  //     id={formId}
  //     placeholder={initialValue}
  //     onClick={() => setActive(true)}
  //     onBlur={(e) => handleSubmit(e)}
  //   />
  // );

  const StyledInput = styled("input", {
    outline: "none",
    p: 3,
    background: "transparent",
    color: "$white",
    border: "none",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "$gray600",
    fontFamily: "$helvetica",
    fontSize: "12px",
    transition: "border 0.3s ease",
    "&::placeholder": {
      color: "$gray600",
      fontSize: "12px",
      transition: "color 0.3s ease",
    },
    "&:focus": {
      borderBottomColor: "$red",
      "&::placeholder": {
        color: "$gray700",
      },
    },
  });

  return (
    <StyledBox
      as="form"
      flex
      direction="column"
      align="center"
      css={{ mt: "$2", mb: "$5" }}
      name={formId}
      id={formId}
      onSubmit={(e) => handleSubmit(e)}
    >
      <StyledText
        as="label"
        variant="settings"
        css={{ textAlign: "start" }}
        htmlFor={formId}
      >
        {formLabel}
      </StyledText>
      <StyledInput
        className="scss-text-input"
        id={formId}
        type="text"
        placeholder={initialValue}
        onClick={() => setActive(true)}
      />
    </StyledBox>
  );
};

//   const handleClickOutside = (e) => {
//     console.log("clicking anywhere");
//     if (node.current.contains(e.target)) {
//       // inside click
//       return;
//     }
//     //outside click
//     setActive(false);
//   };

//   useEffect(() => {
//     // may need to add "typeof document !== undefined" check
//     if (active) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [active]);
