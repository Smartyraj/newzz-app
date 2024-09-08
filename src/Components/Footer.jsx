import logo from "../assets/newzz.jpeg";

const Footer = () => {
  return (
    <div className="footer bg-secondary px-5">
      <div className="container border-bottom">
        <div className="row pt-3">
          <div className="col col-md-3 p-3">
            <img src={logo} style={{ width: "50px" }} alt="" />
            <p className="text-light">
              Newzz delivers timely, accurate, and unbiased news across diverse
              categories, empowering readers with insightful updates on global
              events, technology, entertainment, and more.
            </p>
          </div>
          <div className="col col-md-3 p-3">
            <ul className="">
              <h3 className="text-light">Categories:</h3>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  className="text-light"
                >
                  Technology
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  className="text-light"
                >
                  Business
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  className="text-light"
                >
                  Sports
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  className="text-light"
                >
                  Health
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  className="text-light"
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-md-3 p-3">
            <h3 className="text-light">Contact Us</h3>
            <p className="text-light">Email: abc@gmail.com</p>
            <p className="text-light">Phone: 123-456-7890</p>
          </div>
          <div className="col col-md-3 p-3">
            <h3 className="text-light">Support Us</h3>
            <p className="text-light">
              If you like what we do, support us by donating any amount you
              wish. Thank you.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-light p-3">
        <p>&copy; 2024 Newzz. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
