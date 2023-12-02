import logo from './logo.svg';


function HomePage() {
  return (
  <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#"><img src="asset/images/Logo.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bg-da " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Feaures</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Signup</a>
                </li>
                <a className="nav-link button-1" href="#">Login</a>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="section-1" style={{ backgroundImage: 'url(asset/images/suit_ai_1.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="heading-1">Legal solutions and technology</h1>
              <p className="text-block-1 py-5">
                Don’t draft, Novodraft: reclaim hours of each week and boost your billables
              </p>
              <button className="button-1">
                See how it works
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Section 2 */}
      <section className="section-2 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src="asset/images//laptop.png" alt="" className="img-2" />
            </div>
            <div className="col-md-5">
              <h2 className="heading-2">Risk, fraud, and investigations</h2>
              <p className="text-block-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap.</p>
              <a className="link">Explore risk, fraud, and investigations
                <img src="asset/images/Arrow.png " className="img-1" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section-3 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading-3">Legal and risk, <br />
                fraud, and investigations products</h2>
              <p className="text-block-2 text-center">
                Tech-driven legal and fraud prevention tools built to enhance workflow and strengthen your
                organization.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="asset/images/blogigm.png" alt="" width="100%" className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">Practical Law</h3>
                  <p className="card-texts">Lorem Ipsum is simply dummy text of the printing typesetting</p>
                  <a className="link">Learn More
                    <img src="asset/images/Arrow.png " className="img-1" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="asset/images/blogigm.png" alt="" width="100%" className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">Practical Law</h3>
                  <p className="card-texts">Lorem Ipsum is simply dummy text of the printing typesetting</p>
                  <a className="link">Learn More
                    <img src="asset/images/Arrow.png " className="img-1" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="asset/images/blogigm.png" alt="" width="100%" className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">Practical Law</h3>
                  <p className="card-texts">Lorem Ipsum is simply dummy text of the printing typesetting</p>
                  <a className="link">Learn More
                    <img src="asset/images/Arrow.png " className="img-1" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    <section className="section-4 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="card-title">
              Whether you are looking for legal research tools, productivity solutions, financial management
              software, or investigative and compliance solutions, uncover products that will give your
              organization the boost it needs.
            </p>
            <div className="d-flex div-block-2">
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Business development</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Labor, employment & human resources</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Corporate business & organization</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Law firm marketing</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Legal data & document management</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Legal research & guidance</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Legal forms</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Trial readiness, process & case guidance</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Drafting software, service & guidance</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Fraud prevention, detection & investigations</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Evidence</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Risk & compliance management</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Financial management</p>
              </div>
              <div className="d-flex">
                <img src="asset/images/Group.png" alt="" className="img-check" />
                <p className="text-block-3">Risk management & investigations</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="heading-4">Testimonials</h4>
            <h3 className="heading-5">Powering the growth of 100+ business & retailers in Indonesia.</h3>
            <button className="button-1">Write a Review</button>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <img src="asset/images/symbole.png" alt="" className="symbole" />
              <div className="d-flex star-flex">
                <img src="asset/images/star.png" alt="" />
                <img src="asset/images/star.png" alt="" />
                <img src="asset/images/star.png" alt="" />
                <img src="asset/images/star.png" alt="" />
                <img src="asset/images/star.png" alt="" />
              </div>
            </div>
            <p className="text-block-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the
            </p>
            <div className="d-flex div-block-1">
              <img src="asset/images/Photo.png" alt="" className="img-3" />
              <div>
                <h4 className="heading-5">Photo.png</h4>
                <p className="text-block-5">Lorem Ipsum is simply dummy text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>








    <section className="section-5 py-5">
      <div className="container bg-color" style={{ backgroundImage: "url(asset/images/Group80.png)" }}>
        <div className="row">
          <div className="col-md-6">
            <h4 className="heading-6">Questions about our products and services? We’re here to support you.</h4>
            <h6 className="heading-7">Join with more 1200+ happy customers</h6>
            <div className="d-flex div-block-3">
              <img src="asset/images/clinets.png" alt="" />
              <a href="#">and others</a>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <button className="button-2">View account and product support</button>
            <button className="button-2">Go to product logins</button>
          </div>
        </div>
      </div>
    </section>


      <footer className="footer" style={{ backgroundImage: 'url(asset/images/footerovarlay.png)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="" className="logo">
              <img src="asset/images/Logo.png" alt="" />
            </a>
            <p className="text-block-6">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div className="d-flex iconFlex">
              <a href=""><img src="asset/images/Icon.png" alt="" /></a>
              <a href=""><img src="asset/images/Icon.png" alt="" /></a>
              <a href=""><img src="asset/images/Icon.png" alt="" /></a>
              <a href=""><img src="asset/images/Icon.png" alt="" /></a>
            </div>
          </div>
          <div className="col-md-2 col-6 col-2-footer">
            <h3 className="heading-8">Product</h3>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
          </div>
          <div className="col-md-2 col-6  col-2-footer">
          <h3 className="heading-8">Product</h3>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
          </div>
          <div className="col-md-2 col-6 col-2-footer">
          <h3 className="heading-8">Product</h3>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
          </div>
          <div className="col-md-2  col-6 col-2-footer">
          <h3 className="heading-8">Product</h3>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
            <a href="" className="footer-Link">Lorem Ipsum</a>
          </div>
        </div>
      </div>
      <hr />

      <p className="footerCopyRight">
        Copyright © 2023. dmeolink.com - All Rights Reserved
      </p>
    
    </footer>
  </>
  );
}

export default HomePage;
