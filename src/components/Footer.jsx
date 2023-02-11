import image from "../assets/sjnk.ico";
const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="d-flex" style={{ height: "10%" }}>
        <img
          src={image}
          className="float-start"
          alt="company"
          style={{ border: "none" }}
        />
        <div className="p-3 bg-info bg-opacity-50 col rounded">
          <p className="blockquote float-end">
            With ♥ by <span className="lead">Nandhakumar</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
