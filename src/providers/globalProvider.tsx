import React, { useState, useEffect, FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import GlobalContext from "./../contexts/globalContext";

interface GlobalProviderProps {
  children: React.ReactNode | React.ReactNode[];
  location?: Location;
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
          image
          menuLinks {
            name
            anchor
            translate
          }
          phone
          phoneRef
          whatsapp
          messenger
          facebook
          instagram
        }
      }
    }
  `);

  const {
    menuLinks: menu,
    // siteUrl,
    // phone,
    // phoneRef,
    // facebook,
    // instagram,
  } = data.site.siteMetadata;

  // const [active, setActive] = useState(-1);
  const [language, setLanguage] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = !open ? "hidden" : "scroll";
    setOpen(!open);
  };

  // const changeLinkState = () => {
  //   const sections = document.querySelectorAll<HTMLElement>(".anchor-block");

  //   if (sections.length > 0) {
  //     let adjustment: number = 0;

  //     if (window.matchMedia("(max-width: 1200px)")) {
  //       adjustment = 90;
  //     } else if (window.matchMedia("(max-width: 992px)")) {
  //       adjustment = 170;
  //     } else if (window.matchMedia("(max-width: 768px)")) {
  //       adjustment = 95;
  //     }

  //     let index = sections.length;

  //     while (
  //       --index &&
  //       window.scrollY + adjustment < sections[index].offsetTop
  //     ) {}

  //     setActive(index);
  //   }
  // };

  // useEffect(() => {
  // if (location?.pathname === "/") {
  // changeLinkState();
  // window.addEventListener("scroll", changeLinkState);
  // }

  // if (location?.pathname === "/info") {
  //   console.log(active, location?.pathname);
  //   setActive(6);
  // }

  // return () => {
  // setActive(0);
  // window.removeEventListener("scroll", changeLinkState);
  // };
  // }, []);

  const defaultState = {
    menu,
    // active,
    // setActive,
    language,
    setLanguage,
    open,
    toggleMenu,
    // siteUrl,
    // phone,
    // phoneRef,
    // whatsapp: "https://wa.me/50683274040",
    // messenger: "http://m.me/vistalagoarenal",
    // facebook,
    // instagram,
  };
  return (
    <GlobalContext.Provider value={defaultState}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
