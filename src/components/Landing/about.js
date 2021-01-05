const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              A family owned small business partnership providing desktop and
              web software development for all trades. Across all industries, we
              give you the power to automate and accelerate results.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <h4>
                    Full
                    <br />
                    Services
                    <br />
                  </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      A family owned small business partnership providing code
                      and web development for all business trades.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    <br />
                    Architecture
                    <br />
                  </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2019</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Beva Code team branch focusing on custom support code
                      development for the AEC Software industry. Across the
                      manufacturing, architecture, engineering, building and
                      construction industries
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <h4>
                    Web
                    <br />
                    Design
                    <br />
                  </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Application Development, Consulting Services, Custom
                      Development, Software Integration,Training,
                      Content/Library Development and Data Integration
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Data
                    <br />
                    Integration
                    <br />
                  </h4>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2020</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Code and web development for all business trades.Across
                      all industries, we give you the power to automate and
                      accelerate results.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img
                className="img-fluid d-block mx-auto"
                src="img/logos/envato.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img
                className="img-fluid d-block mx-auto"
                src="img/logos/designmodo.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img
                className="img-fluid d-block mx-auto"
                src="img/logos/themeforest.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#something">
              <img
                className="img-fluid d-block mx-auto"
                src="img/logos/creative-market.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
