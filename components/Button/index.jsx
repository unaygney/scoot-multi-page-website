import React from "react";
import clsx from "clsx";

export default function Button({ title, onClick, className, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "w-[180px] h-[53px] inline-flex items-center justify-center bg-yellow text-white text-[15px] font-bold leading-6 hover:bg-white hover:text-yellow transition-colors hover:border border-yellow"
      )}
      {...rest}
    >
      {title}
    </button>
  );
}
