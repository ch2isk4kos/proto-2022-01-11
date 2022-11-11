import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Table from "react-bootstrap/Table";

const HomeSection3 = () => {
  const [key, setKey] = useState("standings");

  return (
    <Row className="home-section-3">
      <Col xs={8} style={{ border: "5px solid orange", padding: "0" }}>
        <h5>Current News</h5>
        {/* <p>Column 1</p> */}
        <div className="s3-s1-c1" style={{ padding: ".5rem" }}>
          <Card
            className="bg-dark text-white"
            style={{ border: "2px solid blue" }}
          >
            <Card.Img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fominy.org%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F04%2Fmsg-renovation-2200x1467.jpg&f=1&nofb=1&ipt=89071a65f7368d8eeec78d6a696da2b6bdc9dfb3bc306578c43b4efef360d220&ipo=images"
              alt="Card image"
              style={{
                border: "2px solid blue",
                width: "100%",
                height: "10rem",
              }}
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="s3-s1-c2" style={{ padding: ".5rem" }}>
          <Card
            className="bg-dark text-white"
            style={{ border: "2px solid blue" }}
          >
            <Card.Img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fominy.org%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F04%2Fmsg-renovation-2200x1467.jpg&f=1&nofb=1&ipt=89071a65f7368d8eeec78d6a696da2b6bdc9dfb3bc306578c43b4efef360d220&ipo=images"
              alt="Card image"
              style={{
                border: "2px solid blue",
                width: "100%",
                height: "10rem",
              }}
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="s3-s1-c2" style={{ padding: ".5rem" }}>
          <Card
            className="bg-dark text-white"
            style={{ border: "2px solid blue" }}
          >
            <Card.Img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fominy.org%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F04%2Fmsg-renovation-2200x1467.jpg&f=1&nofb=1&ipt=89071a65f7368d8eeec78d6a696da2b6bdc9dfb3bc306578c43b4efef360d220&ipo=images"
              alt="Card image"
              style={{
                border: "2px solid blue",
                width: "100%",
                height: "10rem",
              }}
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </Col>
      <Col style={{ border: "5px solid orange", padding: "0" }}>
        <p>Column 2</p>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="standings" title="Standings">
            {/* <Table striped bordered hover variant="dark"> */}
            {/* <Table striped bordered hover> */}
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th>Div</th>
                  <th>Conf</th>
                  <th>GB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>New York</td>
                  <td>8-1</td>
                  <td>4-2</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Boston</td>
                  <td>7-2</td>
                  <td>4-3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3</td>
                  {/* <td colSpan={2}>Larry the Bird</td> */}
                  <td>Philadelphia</td>
                  <td>7-2</td>
                  <td>3-3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Toronto</td>
                  <td>6-3</td>
                  <td>2-4</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  {/* <td colSpan={2}>Larry the Bird</td> */}
                  <td>Brooklyn</td>
                  <td>3-3</td>
                  <td>3-6</td>
                  <td>6</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="leaders" title="Leaders">
            <p>Leaders Tab</p>
          </Tab>
          <Tab eventKey="playoffs" title="Playoffs">
            <p>Playoffs</p>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default HomeSection3;
