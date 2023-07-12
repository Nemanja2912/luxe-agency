import React, { useState, useRef, useEffect } from "react";

const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleHeight = () => {
      setHeight(containerRef.current.scrollHeight);
    };

    handleHeight();

    window.addEventListener("resize", handleHeight);

    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="faq-item animate-element fade-up" data-parent="true">
      <div className="visible" onClick={toggleOpen}>
        <div className="question">{item.question}</div>
        <div
          className="icon-wrapper"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 16.5C28 16.7652 27.8946 17.0196 27.7071 17.2071C27.5196 17.3946 27.2652 17.5 27 17.5H17V27.5C17 27.7652 16.8946 28.0196 16.7071 28.2071C16.5196 28.3946 16.2652 28.5 16 28.5C15.7348 28.5 15.4804 28.3946 15.2929 28.2071C15.1054 28.0196 15 27.7652 15 27.5V17.5H5C4.73478 17.5 4.48043 17.3946 4.29289 17.2071C4.10536 17.0196 4 16.7652 4 16.5C4 16.2348 4.10536 15.9804 4.29289 15.7929C4.48043 15.6054 4.73478 15.5 5 15.5H15V5.5C15 5.23478 15.1054 4.98043 15.2929 4.79289C15.4804 4.60536 15.7348 4.5 16 4.5C16.2652 4.5 16.5196 4.60536 16.7071 4.79289C16.8946 4.98043 17 5.23478 17 5.5V15.5H27C27.2652 15.5 27.5196 15.6054 27.7071 15.7929C27.8946 15.9804 28 16.2348 28 16.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div
        className={`answer ${open && "margin-top"}`}
        style={{
          maxHeight: open ? height : 0,
          transform: open ? "translateY(0px)" : "translateY(7.5px)",
          opacity: open ? 0.5 : 0,
        }}
        ref={containerRef}
      >
        {item.answer}
      </div>
    </div>
  );
};

export default FaqItem;
