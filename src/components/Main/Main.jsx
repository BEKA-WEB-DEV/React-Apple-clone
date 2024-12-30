import "../Main/Main.css";
import YoutubeVideos from "./YoutubeVideos/YoutubeVideos";
import appleTvLogo from "../../commonResource/images/icons/apple-tv-logo.png";
import watchSeries5Logo from "../../commonResource/images/icons/watch-series5-logo.png";
import arcade from "../../commonResource/images/icons/arcade.png";
import banker from "../../commonResource/images/home/banker.png";
// import '../../commonResource/css/styles.css'
// import '../../commonResource/css/bootstrap.css'

import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      {/* <!-- First section starts here --> */}
      <section className="first-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">iPad Pro</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="">Learn more</Link>
              </li>
              <li>
                <Link to="">Order</Link>
              </li>
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
      {/* <!-- First section starts here -->

	<!-- Second section starts here --> */}
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="">Learn more</Link>
              </li>
              <li>
                <Link to="">Buy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Second section starts here -->

	<!-- Third section starts here --> */}
      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold">iPhone 11 Pro</div>

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="">Learn more</Link>
              </li>
              <li>
                <Link to="">Buy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Third section ends here -->

	<!-- Fourth section starts here --> */}
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 11</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to="">Learn more</Link>
                    </li>
                    <li>
                      <Link to="">Apply now</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <Link to="">Watch the PSA</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fourth section ends here -->

	<!-- Fifth section starts here --> */}
      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={appleTvLogo} alt="" />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={banker} alt="" />
                </div>

                <div className="watch-more-wrapper">
                  <Link to="#">Watch now on the Apple TV App</Link>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={watchSeries5Logo} alt="" />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to="">Learn more</Link>
                    </li>
                    <li>
                      <Link to="">Buy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fifth section ends here -->

	<!-- Sixth section starts here --> */}
      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade} alt="" />
                  </div>
                </div>
                <div className="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to="">
                        Play now<sup>2</sup>
                      </Link>
                    </li>
                    <li>
                      <Link to="">Learn about Apple Arcade</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">
                  Apple Card Monthly Installments
                </div>
                <div className="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to="">Learn more</Link>
                    </li>
                    <li>
                      <Link to="">Apply now</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sixth section ends here --> */}

      <section>
        <YoutubeVideos />
      </section>
    </div>
  );
}
