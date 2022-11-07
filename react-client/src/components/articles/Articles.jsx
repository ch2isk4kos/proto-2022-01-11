import React from "react";
import {
  PrismicRichText,
  useFirstPrismicDocument,
  usePrismicDocumentByUID,
} from "@prismicio/react";

const Articles = () => {
  // const [document] = usePrismicDocumentByUID("article");
  const [document] = useFirstPrismicDocument();
  // const { data } = document;
  return (
    <div className="Articles">
      <h1>Articles</h1>
      <br />
      {/* {data} */}
      {document}
      {/* {document && <PrismicRichText field={document.data.article} />} */}
    </div>
  );
};

export default Articles;
