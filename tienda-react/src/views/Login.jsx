import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'

function Login() {
  return (
    <div className="login-page" style={{maxWidth: 480, margin: '2rem auto'}}>
      <h2>Iniciar sesión</h2>
      <p>Ingresa tus credenciales para acceder</p>
      <Form>
        <Form.Group className='mb-3' controlId='loginEmail'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
        </Form.Group>

        <Form.Group className='mb-3' controlId='loginPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <div style={{display:'flex', gap: '0.5rem'}}>
          <Button variant="pink" type="submit">Iniciar sesión</Button>
          <Button variant="outline-secondary" type="reset">Limpiar</Button>
        </div>
      </Form>
    </div>
  )
}

export default Login
