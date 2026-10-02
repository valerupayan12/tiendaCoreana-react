import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contacto() {
  return (
    <div>
      <p>Si tienes dudas o comentarios, puedes escribirnos:</p>
      <Form>
          
          <Form.Group className='mb-3' controlId='formNombre'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa su nombre" />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formCorreo'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formMensaje'>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
          </Form.Group>
            
          <Button variant="pink" type="submit" className='me-2'> Enviar mensaje </Button>
          <Button variant="pink" type="reset"> Limpiar formulario </Button>
          
        </Form>
    </div>
  );
}

export default Contacto;