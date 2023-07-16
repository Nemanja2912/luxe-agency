import MoveText from "@/components/moveText/moveText";

const AboutDescription = () => {
  return (
    <div className="red about-description">
      <MoveText text={["How", "It", "Started"]} active={2}></MoveText>
      <div className="container">
        <p className="scroll noshow fade-up">
          The Only Fans space has shaken up the entire porn industry for years,
          with the majority of its boom happening during Covid19. The creators
          taking the biggest slices of the profits pie had agencies behind them,
          allowing them to make insane income. Luxe was born to help new and
          aspiring OF creators spread their beauty and make more money than
          they've ever made in their lives as a result. All our girls want to be
          free from the system and have fun. We are the vessel to helping them
          make that happen.
        </p>
      </div>
    </div>
  );
};

export default AboutDescription;
