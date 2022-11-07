import React, { useEffect, useParams } from "react";
import {
  SliceZone,
  usePrismicDocumentByUID,
  useFirstPrismicDocument,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const Article = () => {
  //   const { uid } = useParams();
  //   const [prismicDoc, prismicDocState] = usePrismicDocumentByUID("post");
  const [document, documentState] = useFirstPrismicDocument();
  console.log(document);

  //   const notFound = prismicDocState.state === "failed";
  const notFound = documentState.state === "failed";

  useEffect(() => {
    // if (prismicDocState.state === "failed") {
    if (documentState.state === "failed") {
      console.warn(
        "Blog post document was not found. Make sure it exists in your Prismic repository"
      );
    }
    //   }, [prismicDocState.state]);
  }, [documentState.state]);

  //   return (
  //     <div className="Article">
  //       <h1>Article</h1>
  //       {/* {document} */}
  //     </div>
  //   );
  if (document) {
    console.log(document.data);
    console.log(document.data.titletest);
    const title = prismicH.asText(document.data.titletest) || "Untitled";
    const timestamp = prismicH.asText(document.data.timestamp) || "null";
    // const timestamp = prismicH.asText(document.data.timestamptest) || "null";
    const firstP = prismicH.asText(document.data.paragraphtest) || "null";
    const secondP = prismicH.asText(document.data.paragraphtest2) || "null";

    return (
      //   <div wrapperClass="main" seoTitle={title}>
      <div className="outer-container">
        {/* <BackButton /> */}
        <h1>{title}</h1>
        <h6>{timestamp}</h6>
        <br />
        <p>{firstP}</p>
        <br />
        <p>{secondP}</p>
        {/* </div> */}
        {/* <SliceZone slices={document.data.body} components={components} /> */}
      </div>
    );
  } else if (notFound) {
    return "Not Found!";
  }

  return null;
};

export default Article;
