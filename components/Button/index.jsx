import React from "react";

export default function Button({ title, onClick, ...rest }) {
  return (
    <button onClick={onClick} className={`${className} `} {...rest}>
      {title}
    </button>
  );
}
