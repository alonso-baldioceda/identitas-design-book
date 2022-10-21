import React, { ReactNode, FC } from "react";
import { GlobalStyle } from "./../shared/global.js";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <div>{children}</div>
  </>
);

export default Layout;
