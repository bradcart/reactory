import React, { useState, useEffect } from "react";

/* Generic form input that submits when Enter key is pressed or another element in settings panel is clicked */

export const TextInput = ({ initialValue, updateValue, formId, formLabel }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSubmit(event);
      }
    };

    if (active) {
      document.addEventListener("keydown", listener);
    } else {
      document.removeEventListener("keydown", listener);
    }
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(false);
    updateValue(e.target.value);
  };

  return (
    <form name={formId} id={formId} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor={formId}>{formLabel}</label>
      <input
        id={formId}
        type="text"
        placeholder={initialValue}
        onClick={() => setActive(true)}
        onBlur={(e) => handleSubmit(e)}
      />
    </form>
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
