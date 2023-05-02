import React from "react";

const TemplatePage = ({ children }) => {
  return (
    <div className="flex flex-col  items-center min-h-screen">
     {children}
    </div>
  );
};

export default TemplatePage;