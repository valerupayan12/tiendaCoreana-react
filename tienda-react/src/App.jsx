
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
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  //debe editarse 
  
    const itemsMenu = [
      {href:'#base-2an', label:'Base de maquillaje 2aN', image: imagenBase},
      {href:'#rosy-mucha', label:'Rosy Mucha', image: rosyMucha},
      {href:'#protector-solar', label:'Protector solar', image: protectorSolar},
      {href:'#sakura', label:'Sakura', image: sakura},
      {href:'#tocobo', label:'TOCOBO', image: tocobo},
      {href:'#lip-tattoo', label:'Lip tattoo', image: lipTatto}
  ]
  

  return (
    <>
      <Header 
      titulo="K-Skin" 
      descripcion="Lo mejor de la estetica Coreana en tu piel" 
      itemsMenu={itemsMenu} />
       
      
      <Body
      cuerpo="Bienvenidos a K-Skin, tu destino para productos de belleza coreanos de alta calidad. Descubre nuestra selección de maquillaje, cuidado de la piel y más, cuidadosamente elegidos para resaltar tu belleza natural. Explora nuestras categorías y encuentra los productos perfectos para ti."   
      cuerpo1="En K-Skin, nos apasiona ofrecerte lo mejor de la estética coreana. Desde bases de maquillaje innovadoras hasta tratamientos de cuidado de la piel efectivos, cada producto ha sido seleccionado para brindarte resultados excepcionales. Nuestra misión es ayudarte a lucir y sentirte increíble, con productos que combinan calidad, innovación y estilo."
      cuerpo2="Explora nuestra galería de productos estrella y descubre lo último en tendencias de belleza coreana. Desde protectores solares ligeros hasta tintes labiales de larga duración, tenemos todo lo que necesitas para cuidar tu piel y realzar tu belleza natural. ¡Bienvenido a K-Skin, donde la belleza coreana cobra vida!" 
      
      
      
      />
      <main id="contenido">  
        <Seccion id="inicio" class="seccion">
				<h2>Bienvenidos a K-Skin</h2>
				<p>Los mejores productos de corea estan aqui.</p>
				<p>Puedes encontrar todo lo que necesites!.</p>
			</Seccion>
      <Seccion id="album" titulo="Nuestros Productos Estrella">
				<GaleriaProductos productos={productos}/>
			</Seccion>

      </main> 

      <Footer 
      foot="&copy; 2025 Álbum de Ejemplo - Todos los derechos reservados" />
    </>
  )
}

export default App
