import "./header.css";
import img from "../../../assets/picter.svg"

const Header = () => {
  return (
    <header >
      <div className="content">
        <h2>Dashboard</h2>
        <div className="content">
        <p>Admin</p>
        <img src={img}/>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
