import Picture from "../components/Picture";
import data from "../helper/data";
import "../styles/style.css";

const Homepage = () => {
  return (
    <div>
      <h1 className="header">Image Gallery</h1>
      <div className="container">
        {data.map((item, index) => (
          <Picture {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
