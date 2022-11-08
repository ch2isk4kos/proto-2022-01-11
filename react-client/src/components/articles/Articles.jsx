import React, { useEffect } from "react";
import ArticlesHeader from "./ArticlesHeader";
import ArticleCard from "./ArticleCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles] = useAllPrismicDocumentsByType("article");
  console.log("articles:", articles);
  return (
    <div className="Articles" style={{ border: "2px solid blue" }}>
      {/* HEADER */}
      <div>
        <ArticlesHeader />
      </div>
      {/* ARTICLES */}
      <h1>Articles</h1>
      <br />
      <div className="articles-grid">
        <Row xs={1} md={3} className="g-4" style={{ border: "2px solid red" }}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              {articles &&
                articles.map((article) => <ArticleCard article={article} />)}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Articles;
