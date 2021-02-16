import React from "react";

interface IDefaultLayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): React.ReactElement => {
  return (
    <div className="snbnext">
      <div className="cmt dzt_font">{children}</div>
    </div>
  );
};

export default DefaultLayout;
