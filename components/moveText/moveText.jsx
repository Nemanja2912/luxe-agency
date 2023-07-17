import { useEffect, useRef } from "react";

const MoveText = ({ text, active }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const moveElement = textRef.current;
      const elementRect = moveElement?.getBoundingClientRect();
      if (!elementRect) return;

      const elementTop = elementRect?.top;

      const windowHeight = window.innerHeight;

      moveElement.style.transform = `translateX(${
        -elementTop - windowHeight
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="move-text-wrapper">
      <div className="move-text" ref={textRef}>
        {text.map((word, index) => (
          <p className={index === active ? "active-move" : ""}>{word}</p>
        ))}
        {text.map((word, index) => (
          <p className={index === active ? "active-move" : ""}>{word}</p>
        ))}
        {text.map((word, index) => (
          <p className={index === active ? "active-move" : ""}>{word}</p>
        ))}
        {text.map((word, index) => (
          <p className={index === active ? "active-move" : ""}>{word}</p>
        ))}
        {text.map((word, index) => (
          <p className={index === active ? "active-move" : ""}>{word}</p>
        ))}
      </div>
    </div>
  );
};

export default MoveText;
