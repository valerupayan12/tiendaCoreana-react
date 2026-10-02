import React,{useState} from 'react';

function TarjetaProducto({ nombre, imagen, precio }) { 
    const[meGusta,setMeGusta] = useState(false);

    const alternar=()=>{
        if(meGusta==false)
            setMeGusta(true);
        else
            setMeGusta(false);
        
    }

    return (
        <article className="tarjeta"> 
            <div className="espacio-imagen">
                <img src={imagen} alt={nombre} /> 
            </div>
            <h3>{nombre}</h3>
            <p className="precio">${precio}</p>
            <button
                onClick={alternar}
                style={{
                    backgroundColor: meGusta? '#c590f0' : '#df9be5',
                    color: meGusta? '#fffeff' : '#17171a',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                }}
            >
               {meGusta? '🥀Quitar ' : '🌸Agregar'}
            </button>
        </article>
    );
}

export default TarjetaProducto;
