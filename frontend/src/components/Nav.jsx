import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to={"/"}>
            <h3>Shopping Online</h3>
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <p>Cart {props.cartTotal} </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
