import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import * as prismicH from "@prismicio/helpers";

const ArticleCard = ({ article }) => {
  console.log("thumbnail object:", article);
  console.log("thumbnail data:", article.data);
  //   console.log("article thumbnail data:", article.article.data);
  const title = prismicH.asText(article.data.titletest) || "Untitled";
  //   const title = prismicH.asText(article.data.titletest) || "Untitled";
  const timestamp = prismicH.asText(article.data.timestamp) || "null";
  // const timestamp = prismicH.asText(article.data.timestamptest) || "null";
  const firstP = prismicH.asText(article.data.paragraphtest) || "null";
  const secondP = prismicH.asText(article.data.paragraphtest2) || "null";

  return (
    <div className="ArticleThumbNail">
      {/* <h3>{title}</h3> */}
      {/* <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ height: "6rem", width: "24rem" }}> */}
      <Card style={{ width: "18rem" }}>
        {/* <Card> */}
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>
            <Link to={`/article/${article.id}`}>{title}</Link>
          </Card.Title>
          <small className="text-muted">{timestamp}</small>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer></Card.Footer> */}
      </Card>
    </div>
  );
};

export default ArticleCard;
