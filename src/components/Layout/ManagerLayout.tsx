import React from "react";

interface IManagerLayoutProps {
  children?: React.ReactNode;
}

const ManagerLayout = ({ children }: IManagerLayoutProps): React.ReactElement => {
  return (
    <div className="snbnext">
      <div className="cmt admin dzt_font">{children}</div>
    </div>
  );
};

export default ManagerLayout;
