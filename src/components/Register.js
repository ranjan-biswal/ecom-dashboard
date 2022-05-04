import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    
    // Set Input field values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    function signUp(){
        let requestBody = {
            "username" : username,
            "password" : password,
            "email" : email
        }
        localStorage.setItem("user-info", JSON.stringify(requestBody));
        navigate('/add');
        console.log("Detais :", requestBody);
    }

    return (
        <div>
            <h1>Registration Form</h1>
            <Form className='registration-form'>
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" value = {username} onChange ={(e) => setUsername(e.target.value)} placeholder="Enter user name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value = {password} onChange ={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value = {email} onChange ={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" onClick={signUp}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default Register;