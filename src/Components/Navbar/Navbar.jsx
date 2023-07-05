import './Navbar.css';
import img1 from "./Images/logo.jpg"

const Navbar = () => {
    return ( 
    <div className="Nav">
        <div className='imgae'>
            <img src={img1} alt='image'></img>
        </div>
        <h1 className="NavHeading">
            Title
        </h1>
        <a className="Tab1" href="./">Tab1</a>
        <a className="Tab2" href="./">Tab2</a>
        <a className="Tab3" href="./">Tab3</a>
        <a className="Tab4" href="./">Tab4</a>
        <a className="Tab5" href="./">Tab5</a>
    </div>
    );
}
 
export default Navbar;