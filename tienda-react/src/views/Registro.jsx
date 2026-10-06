import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'

function Registro() {
  return (
    <div className="registro-page" style={{maxWidth: 600, margin: '2rem auto'}}>
      <h2>Registro</h2>
      <p>Crea una cuenta nueva</p>
      <Form>
        <Form.Group className='mb-3' controlId='regNombre'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group className='mb-3' controlId='regEmail'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
        </Form.Group>

        <Form.Group className='mb-3' controlId='regPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Crea una contraseña" />
        </Form.Group>

        <Form.Group className='mb-3' controlId='regConfirmPassword'>
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control type="password" placeholder="Repite la contraseña" />
        </Form.Group>

        <div style={{display:'flex', gap: '0.5rem'}}>
          <Button variant="pink" type="submit">Crear cuenta</Button>
          <Button variant="outline-secondary" type="reset">Limpiar</Button>
        </div>
      </Form>
    </div>
  )
}

export default Registro
