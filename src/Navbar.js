import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>The MeNotes</h1>
            <div className="links">
                <Link to="/">Home Page</Link>
                <Link to="/Create">Create New Note</Link>
                <Link to="/AboutUs">About Us</Link>
            </div>
        </div>
    );
}
 
export default Navbar
