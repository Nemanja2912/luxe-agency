import { useEffect } from "react";

const MoveText = ({ text, active }) => {
  useEffect(() => {
    const handleScroll = () => {
      const moveElement = document.querySelector(".move-text");
      const elementRect = moveElement.getBoundingClientRect();
      const elementTop = elementRect.top;
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
      <div className="move-text">
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
