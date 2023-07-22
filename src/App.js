import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(50);
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <main>{elements}</main>
    </div>
  );
}
