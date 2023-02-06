import * as React from "react";
import type { HeadFC } from "gatsby";

import { Link } from "gatsby";

const InfoPage = () => {
  return (
    <main>
      <Link to="/" className="test">
        Index
      </Link>
      <p>Ifo page!</p>
    </main>
  );
};

export default InfoPage;

export const Head: HeadFC = () => <title>Info Page</title>;
