import PropTypes from "prop-types";

const NewsItem = ({ title, description, src, url }) => {
  // Rest of the component code

  NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string.isRequired,
  };

  return (
      <div className="col">
        <div
          className="card p-2 overflow-hidden"
          style={{ maxWidth: "345px" }}
        >
          <img
            src={
              src
                ? src
                : "https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            style={{ height: "200px", width: "325px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">
              {description
                ? description.slice(0, 90)
                : "Tech giant unveils an AI tool set to revolutionize industries, boosting productivity and reshaping."}
            </p>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
  );
};

export default NewsItem;
