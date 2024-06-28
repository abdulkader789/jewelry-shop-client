"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1); // Increment count by 1
  };

  return (
    <main className="">
      <h1>Hello</h1>
      <button onClick={handleCount}>Increment Count</button>
      <p>Value of count: {count}</p>
    </main>
  );
}
