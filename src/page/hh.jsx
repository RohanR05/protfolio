import React, { useRef } from "react";

export default function App() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToSection}
        className="fixed top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Scroll Down
      </button>

      <div style={{ height: "100vh", background: "#f4f4f4" }}>
        <h1>Top of the Page</h1>
      </div>

      <div
        ref={sectionRef}
        style={{ height: "100vh", background: "#ddd" }}
      >
        <h1>Target Section</h1>
      </div>
    </div>
  );
}
