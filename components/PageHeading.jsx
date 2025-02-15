import React from "react";

export default function PageHeading({ children }) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {children}
      </h1>
    </div>
  );
}
