import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

function Navbar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">

            <Nav.Item className="container" >
                <h2>Where in the world?</h2>
                <h2>Dark Mode</h2>
            </Nav.Item>


        </Nav>
    );
}

export default Navbar;

