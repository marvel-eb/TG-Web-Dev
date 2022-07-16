import React from "react";

const Subscribe = (props) => {
  const today = new Date();
  return (
    <footer className="copyright">
      <p>
        EphiShop | Copyright &copy; {today.getFullYear()} | Designed &
        Developed by Ephrem
      </p>
    </footer>
  );
};

export default Subscribe;
