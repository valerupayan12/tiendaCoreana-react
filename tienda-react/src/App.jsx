
import './App.css'
import imagenBase from './assets/img/2aN_BASE.jpg'
import rosyMucha from './assets/img/2-rosy-mucha.jpg'
import protectorSolar from './assets/img/protectorSolas.jpeg'
import sakura from './assets/img/sakura.jpeg'
import tocobo from './assets/img/TOCOBO04.jpg'
import cosmeticosCoreanos from './assets/img/maquillajeskincare.jpg'
import lipTatto from './assets/img/liptatto.jpg'
import portadaCoreana from './assets/img/coreana.jpg'
import logoSkinInternational from './assets/img/logoskininternational.png'
import tratamientoVitaminaC from './assets/img/15552_krskin_vc.jpg'
import Seccion from './Seccion'
import

function App() {
  //debe editarse 
  const itemMenu=[
    {href:'#inicio',label:'Inicio'},
    {href:'#album',label:'Productos'}
    
  ]
  const productos = [
    {
      id: 1,
      nombre: 'Base de maquillaje 2aN',
      imagen: imagenBase,
      precio: '5000'
    },
    {
      id: 2,
      nombre: 'Rosy Mucha',
      imagen: rosyMucha,
      precio: '7000'
    },
    {
      id: 3,
      nombre: 'Protector solar',
      imagen: protectorSolar,
      precio: '10000'
    },
    {
      id: 4,
      nombre: 'Sakura',
      imagen: sakura,
      precio: '8000'
    },
    {
      id: 5,
      nombre: 'TOCOBO',
      imagen: tocobo,
      precio: '12000'
    },
    {
      id: 6,
      nombre: 'Maquillaje y skincare',
      imagen: cosmeticosCoreanos,
      precio: '15000'
    },
    {
      id: 7,
      nombre: 'Lip tattoo',
      imagen: lipTatto,
      precio: '20000'
    },
    {
      id: 8,
      nombre: 'Productos coreanos',
      imagen: portadaCoreana,
      precio: '25000'
    },
    {
      id: 9,
      nombre: 'K-Skin International',
      imagen: logoSkinInternational,
      precio: '30000'
    },
    {
      id: 10,
      nombre: 'Tratamiento vitamina C',
      imagen: tratamientoVitaminaC,
      precio: '35000'
    },
  ]

  return (
    <>
      <header id="encabezado">
        <h1>K-Skin</h1>
        <p>Lo mejor de la estetica Coreana en tu piel</p>
        <img src={logoSkinInternational} alt="K-Skin International" width="800" height="400" />

        <nav id="menu-principal">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#album">Productos</a></li>
          </ul>
        </nav>
      </header>
      
      <main id="contenido"> //Se le modifico todo elconteido llamnado a las propiedades de SECCION 
        <Seccion id="inicio" titulo="Bienedio a K-Skin">
          <p>Los mejores productos de corea estan aqui.</p>
				  <p>Puedes encontrar todo lo que necesites!.</p>
        </Seccion>
        <Seccion id="album" titulo="Nuestros Productos">
          <GaleriaProductos productos={productos} />
        </Seccion>

      </main>
      //COMPONENTE PARA

       

      <footer id="pie">
        <p><small>&copy; 2026 K-Skin - Todos los derechos reservados</small></p>
      </footer>
    </>
  )
}

export default App
