import React from "react";
import PasswordReset from "../../Forms/PasswordReset";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
const Recovery = (props) => {
  return (
    <>
      <Header {...props} />

      <div className="container-fluid">
        <div className="container margin-tb">
          <PasswordReset />;
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default Recovery;
