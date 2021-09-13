import FooterLinks from "../Contents/FooterLinks";
import FooterCallaction from "../Contents/FooterCallaction";
import FooterCopyright from "../Contents/FooterCopyright";
import Social from "../Contents/Social";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid footer-primary text-left py-5">
        <div className="container text-white-50 p-4">
          <div className="row">
            <div className="col-md-4 col-lg-5 col-6">
              <Social />
              <FooterCallaction />
            </div>
            <div className="col-6 col-md-8 col-lg-7">
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
