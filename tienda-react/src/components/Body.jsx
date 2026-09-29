function Body({cuerpo,cuerpo1,cuerpo2,cuerpo3,cuerpo4,cuerpo5,cuerpo6,cuerpo7}){

return (
<>
	<div className="topbar">
		<div>
			<div className="woostify-container">
					<div className="topbar-item topbar-left"></div>
					<div className="topbar-item topbar-center">Envio gratis
					en compras sobre $20.000</div>
					<div className="topbar-item topbar-right"></div> 
			</div>
		</div>
	</div>

	<main id="contenido">
		<section id="inicio" className="seccion">
			<h2>Bienvenidos a K-Skin</h2>
			<p>Los mejores productos de corea estan aqui.</p>
			<p>Puedes encontrar todo lo que necesites!.</p>
		</section>

		<section id="album" className="seccion">
			<h2>Revisa Lo Nuevo!</h2>
			<img src="img/coreana.jpg"/>
			<h3>Revisa Nuestros Productos Estrella</h3>
			

			<div className="galeria">
				{/* Tarjeta 1 */}
				<article className="tarjeta">
					<div className="espacio-imagen">
						{/* Aquí iría una imagen */}
						<img src="img/TOCOBO04.jpg" style={{ height: '100%', width: '200%', objectFit: 'cover' }}/>
					</div>
					<h3>TOBOCO SKIN</h3>
					<p>Proteccion Solar </p>
					
				</article>

				{/* Tarjeta 2 */}
				<article className="tarjeta">
					<div className="espacio-imagen">
						{/* Aquí iría una imagen */}
						<img src="img/2-rosy-mucha.jpg" style={{ height: '100%', width: '200%', objectFit: 'cover' }}/>
					</div>
					<h3>Glaze Bouncing Tint</h3>
					<p>Tinte labial con efecto voluminizador refrescante.</p>
				</article>

				{/* Tarjeta 3 */}
				<article className="tarjeta">
					<div className="espacio-imagen">
						{/* Aquí iría una imagen */}
					<img src="img/15552_krskin_vc.jpg" style={{ height: '100%', width: '200%', objectFit: 'cover' }}/>
					</div>
					<h3>Numbuzin Tonico</h3>
					<p>Tónico para la piel con propiedades revitalizantes.</p>
				</article>

				{/* Tarjeta 4 */}
				<article className="tarjeta">
					<div className="espacio-imagen">
						{/* Aquí iría una imagen */}
					<img src="img/2aN_BASE.jpg" style={{ height: '100%', width: '200%', objectFit: 'cover' }}/>
					</div>
					<h3>2aN Gleaming Tension N°21</h3>
					<p>Base de maquillaje en formato cushion, con tecnología tension net que distribuye el maquillaje de forma uniforme, logrando una cobertura pareja y acabado luminoso.</p>
				</article>

				{/* Tarjeta Protector Solar */}
				<article className="tarjeta">
					<div className="espacio-imagen">
						<img src="img/protectorSolas.jpeg" alt="Protector Solar"/>
					</div>
					<h3>Protector Solar</h3>
					<p>Protección SPF50+ de textura ligera que se absorbe rápidamente sin dejar residuo grasoso.</p>
				</article>

				{/* Tarjeta 6 */}
				<article className="tarjeta">
					<div className="espacio-imagen">
						{/* Aquí iría una imagen */}
						<img src="img/liptatto.jpg" style={{ height: '100%', width: '200%', objectFit: 'cover' }}/>
					</div>
					<h3>Lip Tatto Berrisom</h3>
					<p>el tinte labial peel-off original de Corea.</p>
				</article>
			</div>
		</section>

		
	</main>

</>
)


}

export default Body