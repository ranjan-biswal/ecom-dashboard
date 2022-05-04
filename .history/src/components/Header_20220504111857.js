import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Testing</Navbar.Brand>
          <Nav className="me-auto">
            {
              localStorage.getItem('user-info') ?
                <>
                  <Link className='nav-links' to="/add">Add Product</Link>
                  <Link className='nav-links' to="/update">Update Product</Link>
                </> :
                <>
                  <Link className='nav-links' to="/login">Login</Link>
                  <Link className='nav-links' to="/register">Register</Link>
                </>

            }
          </Nav>
          <NavDropdown title="User Name" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;