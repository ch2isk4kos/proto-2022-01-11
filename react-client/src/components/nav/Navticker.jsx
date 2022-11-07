import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Ticker from "react-ticker";

// const Navticker = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//       <Container>
//         <Nav>
//           <Ticker>
//             {({ index }) => (
//               <>
//                 <h1 style={{ paddingRight: "0.5em" }}>Ticker ${index}!</h1>
//               </>
//             )}
//           </Ticker>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

const Navticker = () => (
  <Ticker>
    {({ index }) => (
      <>
        <h1>This is the Headline of element #{index}!</h1>
        <img src="www.my-image-source.com/" alt="" />
      </>
    )}
  </Ticker>
);

export default Navticker;
