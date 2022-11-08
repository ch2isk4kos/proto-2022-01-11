import React, { useEffect } from "react";
import ArticleThumbNail from "./ArticleCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Articles = () => {
  const [articles] = useAllPrismicDocumentsByType("article");
  console.log("articles:", articles);
  return (
    <div className="Articles">
      <h1>Articles</h1>
      <br />
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            {articles &&
              articles.map((article) => <ArticleThumbNail article={article} />)}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Articles;
