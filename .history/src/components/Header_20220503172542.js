import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Testing</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-links' to="/login">Login</Link>
            <Link className='nav-links' to="/register">Register</Link>
            <Link className='nav-links' to="/add">Add Product</Link>
            <Link className='nav-links' to="/update">Update Product</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;