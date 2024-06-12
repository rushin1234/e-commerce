import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { useState } from 'react';

function Login() {
  const [form, setForm] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Form className='login'>
      {form === 'login' ? <></> :
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={((e) => setName(e.target.value))} type="text" placeholder="Enter Name" required />
        </Form.Group>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={((e) => setEmail(e.target.value))} type="email" placeholder="Enter email" required />
        {form === 'login' ? <></> :
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={((e) => setPassword(e.target.value))} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {form}
      </Button>

      {form === 'login' ?
        <p>Don't have an account? <span onClick={() => setForm('register')}>Register here</span></p> :
        <p>Already have an account? <span onClick={() => setForm('login')}>Login here</span></p>}
    </Form>
  );
}

export default Login;