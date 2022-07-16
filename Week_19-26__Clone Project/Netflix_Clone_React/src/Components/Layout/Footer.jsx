import FooterLinks from "../Contents/FooterContents/FooterLinks";
import FooterCallAction from "../Contents/FooterContents/FooterCallAction";
import FooterCopyright from "../Contents/FooterContents/FooterCopyright";
import Social from "../Contents/FooterContents/Social";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid footer-primary text-left py-5">
        <div className="container text-white-50 p-4">
          <div className="row">
            <div className="col-md-4 col-lg-5 col-6">
              <Social />
              <FooterCallAction />
            </div>
            <div className="col-6 col-md-8 col-lg-7 pt-5 mt-3">
              <FooterLinks />
            </div>
          </div>
        </div>
      </footer>

      <footer className="text-left footer-secondary">
        <div className="container">
          <div className="row">
            <FooterCopyright />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
