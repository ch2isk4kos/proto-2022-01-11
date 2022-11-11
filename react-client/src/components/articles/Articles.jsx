import React, { useEffect } from "react";
import ArticlesHeader from "./ArticlesHeader";
import ArticleCard from "./ArticleCard";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import ArticlesSection2 from "./ArticlesSection2";
import ArticlesSection3 from "./ArticlesSection3";
import ArticlesSection4 from "./ArticlesSection4";
import Row from "react-bootstrap/Row";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles] = useAllPrismicDocumentsByType("article");
  console.log("articles:", articles);
  return (
    <div className="Articles">
      <Container>
        <ArticlesHeader />
        <ArticlesSection2 />
        <ArticlesSection3 />
        <ArticlesSection4 />
      </Container>
      {/* ARTICLES HEADER */}
      {/* <div>
        <ArticlesHeader />
      </div> */}

      {/* ARTICLES SECTION 2 */}
      {/* <div className="articles-grid"> */}
      {/* <Row xs={1} md={3} className="g-4"> */}
      {/* <Row className="articles-grid-row"> */}
      {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
      {/* <Col> */}
      {/* {articles && */}
      {/* articles.map((article) => <ArticleCard article={article} />)} */}
      {/* </Col> */}
      {/* ))} */}
      {/* </Row> */}
      {/* </div> */}
      {/* PAGINATION */}
      {/* <div className="articles-pagination">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item> */}
      {/* <Pagination.Ellipsis /> */}

      {/* <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item> */}

      {/* <Pagination.Item>{20}</Pagination.Item> */}
      {/* <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div> */}
    </div>
  );
};

export default Articles;
