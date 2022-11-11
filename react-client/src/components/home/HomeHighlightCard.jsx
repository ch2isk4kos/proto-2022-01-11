import React from "react";
import Figure from "react-bootstrap/Figure";

const HighlightCard = () => {
  return (
    <Figure className="highlight-card">
      {/* <Figure className="highlight-card" style={{ padding: "0", margin: "0" }}> */}
      <Figure.Image
        width={200}
        height={250}
        alt="171x180"
        // src="holder.js/171x180"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X357ZPLl-ERpPVBKQLopbwHaHk%26pid%3DApi&f=1&ipt=7af359b5e4bf70254b22fad6fb027683677c69a0c96074428370705c2446d559&ipo=images"
      />
    </Figure>
  );
};

export default HighlightCard;
