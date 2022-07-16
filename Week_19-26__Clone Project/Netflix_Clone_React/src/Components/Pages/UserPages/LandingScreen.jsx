import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import { FaGlobeAmericas } from "react-icons/fa";

export default function LandingPage() {
  // const [clicked, setClicked] = useState(null);
  // const toggle = i => {
  //     if (clicked === i) {
  //         return setClicked(null)
  //     }

  //     setClicked(i)
  // }

  const accordion = [
    {
      question: "Wat kan ik kijken op Netflix?",
      answer:
        "Netflix heeft een uitgebreide catalogus van speelfilms, documentaires, series, anime, bekroonde Netflix Originals en meer. Kijk zoveel je wilt en wanneer je wilt.",
      link: "",
    },
    {
      question: "Wat is Netflix?",
      answer:
        "Netflix is een streamingservice met een zeer groot aanbod van bekroonde series, films, anime, documentaires en nog veel meer op duizenden apparaten met een internetverbinding. Je kijkt zo veel je wilt, wanneer je wilt, zonder enige vorm van reclame. En dit allemaal voor één lage prijs per maand. Er valt altijd iets nieuws te ontdekken en elke week worden er nieuwe series en films toegevoegd!",
      link: "",
    },
  ];

  return (
    <div id="landing-page">
      <div>
        <header>
          <Navbar.Brand className="nav">
            <LinkContainer to="/LogInScreen">
              <img className="logo" src={logo} alt="Netflix Logo" />
            </LinkContainer>
            <div className="navBtn ml-auto">
              <button className="px-2 rounded">
                <FaGlobeAmericas /> Nederlands
              </button>
              <LinkContainer to="/LogInScreen">
                <button>Inloggen</button>
              </LinkContainer>
            </div>
          </Navbar.Brand>
        </header>
        <h1>Onbeperkt series, films en meer kijken.</h1>
        <h4>Kijk waar je wilt. Altijd opzegbaar.</h4>
        <h5>
          Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te
          starten of te hernieuwen.
        </h5>

        <form action="" method="post">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mailadres"
          />
          <button type="submit">Aan de slag &#62;</button>
        </form>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Kijk op je tv.</h2>
          <p className="our-story-card-subtitle">
            Kijk op smart-tv's, PlayStation, Xbox, Chromecast, Apple TV,
            blu-rayspelers en meer.
          </p>
        </div>
        <div className="our-story-card-img-container">
          <div className="our-story-card-animation-container">
            <img
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="image of a flat screen tv"
            />
            <div className="our-story-card-animation">
              <video
                className="our-story-card-video"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="our-story-card downloadAndWatch">
        <div className="our-story-card-img-container">
          <div className="our-story-card-animation-container">
            <img
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Mobile device with Stranger Things television series on it"
            />
            <div className="our-story-card-animation">
              <div className="our-story-card-animation-image">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="Poster of Stranger Things, television series"
                />
              </div>

              <div className="our-story-card-animation-text">
                <div className="text-0">Stranger Things</div>
                <div className="text-1">Downloaden...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">
            Download series die je offline wilt kijken.
          </h2>
          <p className="our-story-card-subtitle">
            Sla je favorieten eenvoudig op zodat je altijd wat kunt kijken.
          </p>
        </div>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Kijk overal.</h2>
          <p className="our-story-card-subtitle">
            Stream onbeperkt series en films op je telefoon, tablet, laptop en
            tv, zonder meer te betalen.
          </p>
        </div>
        <div className="our-story-card-img-container">
          <div className="our-story-card-animation-container">
            <img
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="Netflix on a cell phone, a tablet and a desktop"
            />
            <div className="our-story-card-animation animationPlace">
              <video
                className="our-story-card-video positionChange"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-img-container">
          <img
            className="our-story-card-img"
            src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfHU6rUGPM-0fCFyBI9QmkWq2Gde4IN73Rd3fPa5OZwCMTevvHHH4I1cJcvKPU2xBsGT4NSOMRpRA9L4IVQrGZHaCPFo.png?r=bb1"
            alt="colorful 3D figures for children"
          />
        </div>
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Maak profielen voor kids.</h2>
          <p className="our-story-card-subtitle">
            Laat kids op avontuur gaan met hun favoriete personages in een
            omgeving die speciaal voor hen is gemaakt. Gratis bij je
            lidmaatschap.
          </p>
        </div>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Veelgestelde vragen</h2>
          <ul className="faq-list">
            <li className="faq-list-item">
              <button className="faq-question">
                Wat kan ik kijken op Netflix?
              </button>
            </li>
          </ul>
          {/* Accordion */}
          {/* <div className="accordion-title" onClick={() => toggle(i)} /> */}
          {/* <div className={clicked === i ? "accordion-content open" : "accordion-content"} /> */}
          {/* Accordion */}
          <p>
            Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te
            starten of te hernieuwen.
          </p>

          <form className="form" action="" method="post">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mailadres"
            />
            <button type="submit">Aan de slag &#62;</button>
          </form>
          {/* <FooterGuest /> */}
        </div>
      </div>
    </div>
  );
}
