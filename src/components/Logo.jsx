import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
const Logo = ({ size }) => {
  return (
    <Link to="/">
      <img
        src="https://ucarecdn.com/be169667-21a4-41d6-a7ef-1470c77cb7e4/codingio2.png"
        className={`${size}  `}
      />
    </Link>
  );
};

export default Logo;
