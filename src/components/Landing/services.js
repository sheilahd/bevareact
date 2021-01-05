const Services = () => {
  return (
    <div className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted"></h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className=" fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Desktop Application Development</h4>
            <p className="text-muted">
              Locally installed standalone software application programs running
              on windows desktop or a laptop computer.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-connectdevelop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">
              {" "}
              Web-based Application Development
            </h4>
            <p className="text-muted">
              Remotely served software application programs running on web
              browsers and delivered to the user's device over the Internet.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-mixcloud fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Custom Mixed Development</h4>
            <p className="text-muted">
              Multi-platform software applications integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
