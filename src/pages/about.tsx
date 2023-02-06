import * as React from "react";
import type { HeadFC } from "gatsby";

import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <Link to="/" className="test">
        Index
      </Link>
      <p>About page!</p>
    </main>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>Home Page</title>;
