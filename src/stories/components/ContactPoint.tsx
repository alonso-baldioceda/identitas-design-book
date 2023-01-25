import React, { FC } from "react";
import { Helmet } from "react-helmet";

export interface ContactPointProps {
  type: string;
  url: string;
  name: string;
  contactPoint: {
    type: string;
    telephone: string;
    contactType: string;
  };
}

const ContactPoint: FC<ContactPointProps> = ({
  type,
  url,
  name,
  contactPoint,
}) => (
  <Helmet>
    <script type="application/ld+json">
      {`
        {
            "@context": "https://schema.org",
            "@type": "${type}",
            "url": "${url}",
            "name": "${name}",
            "contactPoint": {
            "@type": "${contactPoint.type}",
            "telephone":   "${contactPoint.telephone}",
            "contactType": "${contactPoint.contactType}"
            }
        }
    `}
    </script>
  </Helmet>
);

export default ContactPoint;
