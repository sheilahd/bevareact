import btn1 from "../../assets/img/cards/btn1.jpg";
import btn2 from "../../assets/img/cards/btn2.jpg";

export default ({ addinsCardsLinks }) => {
  return (
    <section className="bg-light page-section" id="addinsCards">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Revit Add-ins Cards
          </h2>
          <h3 className="section-subheading text-muted">
            Addins on Testing & Development
          </h3>
        </div>

        <div className="row">
          {/* <-- on Testing/Button1 -->  */}
          <div class="col-lg-4 col-sm-6">
            <div class="addinsCards-item text-center">
              <a
                class="addinsCards-link"
                data-toggle="modal"
                href="#addinsCardsModal6"
              >
                <div class="addinsCards-hover">
                  <div class="addinsCards-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={btn1} alt="Logo" />
              </a>
              <div class="addinsCards-caption">
                <h4 className="text-center"> EZBuild</h4>
                <h5 className="text-center text-muted">
                  Currently on Testing:
                </h5>
                <div class="addinsCards-caption-subheading text-muted">
                  Creates a new Revit model by collecting data from the user.
                  <br />
                  Available in (link to Autodesk Store – to buy).
                </div>
              </div>
            </div>
          </div>

          <div
            class="addinsCards-modal modal fade"
            id="addinsCardsModal6"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times mr-1"></i>
                  </button>
                </div>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="modal-body">
                        <h4> EZBuild</h4>
                        <p class="item-intro text-muted">
                          Creates a new Revit model by collecting data from the
                          user.
                        </p>
                        <img class="img-fluid d-block mx-auto" src={btn1} />
                        <p>
                          This Revit add-in command will help you speed up your
                          modeling tasks by automating creation and shortening
                          your modeling workflow substantially. Filling out its
                          form containing location coordinates, building
                          dimensions, walls and roof type results in a one-click
                          3D model built as described in the elements choices.
                          <br />
                          Current version: 1.0
                        </p>
                        <ul class="list-inline">
                          <li>Date: January 2021</li>
                          <li>Client: Multiple. International</li>
                          <li>Category: Architecture</li>
                          <li>
                            Available in Autodesk Store within EZevit add-in
                            bundle (link to Autodesk Store – to buy)
                          </li>
                        </ul>
                        {/* <button
                          class="btn btn-primary"
                          data-dismiss="modal"
                          type="button"
                        >
                          <i class="fa fa-times mr-1"></i>
                          Close Project
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <-- on Testing/Button2 -->  */}
          <div class="col-lg-4 col-sm-6">
            <div class="addinsCards-item text-center">
              <a
                class="addinsCards-link"
                data-toggle="modal"
                href="#addinsCardsModal7"
              >
                <div class="addinsCards-hover">
                  <div class="addinsCards-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid " src={btn2} alt="Logo" />
              </a>
              <div class="addinsCards-caption">
                <h4 className="text-center"> EZForms</h4>
                <h5 className="text-center text-muted">
                  Currently on Testing:
                </h5>
                <div class="addinsCards-caption-subheading text-muted">
                  Creates a new set of sheets including the title block and
                  scaled views with view templates by collecting data from the
                  user.
                  <br />
                  Available in (link to Autodesk Store – to buy)
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div
            class="addinsCards-modal modal fade"
            id="addinsCardsModal7"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times mr-1"></i>
                  </button>
                </div>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="modal-body">
                        <h4> EZForms</h4>
                        <p class="item-intro text-muted">
                          Creates a new set of sheets including title block and
                          scaled views with view templates by collecting data
                          from the user.
                        </p>
                        <img class="img-fluid d-block mx-auto" src={btn2} />
                        <p>
                          This Revit add-in command will help you speed up your
                          annotation process by automating the creation of your
                          sheet set. It also will neatly populate the sheets
                          with the previously selected plans and views including
                          its view templates.
                          <br />
                          Current version: 1.0
                        </p>
                        <ul class="list-inline">
                          <li>Date: January 2021</li>
                          <li>Client: Multiple. International</li>
                          <li>Category: Multi-discipline</li>
                          <li>
                            Available in Autodesk Store within EZevit add-in
                            bundle (link to Autodesk Store – to buy)
                          </li>
                        </ul>
                        <button
                          class="btn btn-primary"
                          data-dismiss="modal"
                          type="button"
                        >
                          <i class="fa fa-times mr-1"></i>
                          Close Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <-- on Development -->  */}
          {addinsCardsLinks &&
            addinsCardsLinks.map(({ title, caption, picture }, index) => (
              <div className="col-md-4 col-sm-6 addinsCards-item text-center">
                <a
                  className="addinsCards-link"
                  data-toggle="modal"
                  href="#addinsCardsModal1"
                >
                  <div class="addinsCards-hover">
                    <div class="addinsCards-hover-content">
                      <i
                        class="fa fa-times fa-3x "
                        style={{ color: "#a9a9a9" }}
                      ></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={picture} />
                </a>
                <div className="addinsCards-caption">
                  <h4 className="text-center">{title}</h4>
                  <h5 className="text-center text-muted">
                    Currently on Development:
                  </h5>
                  <p className="text-muted">{caption}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
