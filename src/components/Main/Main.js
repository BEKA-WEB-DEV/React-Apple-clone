import React from "react";

import appleTvLogo from "../../commonResource/images/icons/apple-tv-logo.png";
import watchSeries5Logo from "../../commonResource/images/icons/watch-series5-logo.png";
import arcade from "../../commonResource/images/icons/arcade.png";
import banker from "../../commonResource/images/home/banker.png";
import "../../commonResource/css/styles.css";
// import "../../commonResource/css/bootstrap.css";

export default function Main() {
  return (
    <div>
      <section class="alert-section top-50">
        <div class="container">
          <div class="alert-title">We’re open for you.</div>
          <div class="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>

      {/* <!-- First section starts here --> */}
      <section class="first-hightlight-wrapper">
        <div class="container">
          <div class="new-alert">New</div>

          <div class="title-wraper bold black">iPad Pro</div>

          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
            </ul>
          </div>

          <div class="ipod-caption row">
            <div class="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div class="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
      {/* <!-- First section starts here -->

	<!-- Second section starts here --> */}
      <section class="second-hightlight-wrapper">
        <div class="container">
          <div class="new-alert">New</div>

          <div class="title-wraper bold black">MacBook Air</div>

          <div class="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div class="price-wrapper grey">From $999.</div>

          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Second section starts here -->

	<!-- Third section starts here --> */}
      <section class="third-hightlight-wrapper">
        <div class="container">
          <div class="title-wraper bold">iPhone 11 Pro</div>

          <div class="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div class="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Third section ends here -->

	<!-- Fourth section starts here --> */}
      <section class="fourth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="title-wraper">iPhone 11</div>
                <div class="description-wraper">
                  Just the right amount of everything.
                </div>
                <div class="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>

                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div class="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">Watch the PSA</a>
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
      <section class="fifth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={appleTvLogo} />
                  </div>
                </div>

                <div class="tvshow-logo-wraper">
                  <img src={banker} />
                </div>

                <div class="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={watchSeries5Logo} />
                  </div>
                </div>
                <div class="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
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
      <section class="sixth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={arcade} />
                  </div>
                </div>
                <div class="description-wraper white">
                  Agent 8 is a small hero on a big mission.
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">
                        Play now<sup>2</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="title-wraper">Apple Card Monthly Installments</div>
                <div class="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sixth section ends here --> */}
    </div>
  );
}
