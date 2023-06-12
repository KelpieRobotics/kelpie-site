import React from "react";

const TemplatePage = ({ title, children }) => {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.375rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)', padding: '1rem', margin: '2rem'}}>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  );
};

export default TemplatePage;