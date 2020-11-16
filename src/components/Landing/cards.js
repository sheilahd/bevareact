export default ({ addinsCardsLinks }) => {
  return (
    <section className="bg-light page-section" id="addinsCards">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              Revit Add-ins Cards
            </h2>
            <h3 className="section-subheading text-muted">
              Currently on Development
            </h3>
          </div>
        </div>
        <div className="row">
          {addinsCardsLinks &&
            addinsCardsLinks.map(({ title, caption, img }, index) => (
              <div className="col-md-4 col-sm-6 addinsCards-item">
                <a
                  className="addinsCards-link"
                  data-toggle="modal"
                  href="#addinsCardsModal1"
                >
                  <div className="addinsCards-hover">
                    <div className="addinsCards-hover-content">
                      <i className="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src={`https://unsplash.it/350/140/?${Math.floor(
                      Math.random(0, 100) * 100
                    )}`}
                    alt="addinsCards_img"
                  />
                </a>
                <div className="addinsCards-caption">
                  <h4>{title}</h4>
                  <p className="text-muted">{caption}</p>
                </div>
              </div>
            ))}

          <div class="col-lg-4 col-sm-6">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal6"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  class="img-fluid"
                  src="assets/img/portfolio/06-thumbnail.jpg"
                  alt=""
                />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">Window</div>
                <div class="portfolio-caption-subheading text-muted">
                  Photography
                </div>
              </div>
            </div>
          </div>

          <div
            class="portfolio-modal modal fade"
            id="portfolioModal6"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <img src="assets/img/close-icon.svg" alt="Close modal" />
                </div>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="modal-body">
                        <h2 class="text-uppercase">Project Name</h2>
                        <p class="item-intro text-muted">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <img
                          class="img-fluid d-block mx-auto"
                          src="assets/img/portfolio/06-full.jpg"
                          alt=""
                        />
                        <p>
                          Use this area to describe your project. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit. Est
                          blanditiis dolorem culpa incidunt minus dignissimos
                          deserunt repellat aperiam quasi sunt officia expedita
                          beatae cupiditate, maiores repudiandae, nostrum,
                          reiciendis facere nemo!
                        </p>
                        <ul class="list-inline">
                          <li>Date: January 2020</li>
                          <li>Client: Window</li>
                          <li>Category: Photography</li>
                        </ul>
                        <button
                          class="btn btn-primary"
                          data-dismiss="modal"
                          type="button"
                        >
                          <i class="fas fa-times mr-1"></i>
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
