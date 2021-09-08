import Social from "../Contents/FooterContents/Social";
import FooterPages from "../Contents/FooterContents/FooterPages";
import Subscribe from "../Contents/FooterContents/Subscribe";
import Copyright from "../Contents/FooterContents/Copyright";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-items">
            <Social />
            <FooterPages />
            <Subscribe />
          </div>
        </div>
      </footer>

      <footer className="copyright">
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
