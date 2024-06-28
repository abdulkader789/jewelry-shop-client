"use client";
import { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0); // State for count
  const handleIncrement = () => {
    setCount(count + 1); // Increment count by 1
  };

  return (
    <div>
      This is Footer
      <button onClick={handleIncrement}>Increment Count {count}</button>
    </div>
  );
};

export default Footer;
