const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <p>EPHREM | Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
