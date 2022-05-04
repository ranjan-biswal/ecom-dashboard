
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    
    // Set Input field values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const navigate = useNavigate();   

    function login(){
        let requestBody = {
            "username" : username,
            "password" : password
        }
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
        navigate('/add');
    }

    return (
        <div>
            <h1>Login Form</h1>
            <Form className='registration-form'>
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value = {username} onChange ={(e) => setUsername(e.target.value)} placeholder="Enter user name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value = {password} onChange ={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" onClick={login}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;