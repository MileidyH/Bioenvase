import React from 'react'
import '../../style/NoBiodegradable.css'

const NoBiodegradable = () => {
  return (
    <section>
      <h1>Reutilizables</h1>
      <p>Educación y Conexión: Nos importa construir una comunidad informada y comprometida. Por ello, realizamos talleres y compartimos información educativa sobre el reciclaje, la biodegradabilidad y el consumo responsable.</p>
      <div>
        <div className='nobio'>
          <div className="tarjeta">
            <div className="titulo"> Toallas Cotton</div>
            <div className="cuerpo">
              <img src="/images/toallas.jpg" alt="Target" />
              x500
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Toallas Simple </div>
            <div className="cuerpo">
              <img src="/images/toallasreu1.jpg" alt="Target" />
              x5
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Toallas Reu</div>
            <div className="cuerpo">
              <img src="/images/toallasreu2.jpg" alt="Target" />
              x100
            </div>
          </div>        
          <div className="tarjeta">
            <div className="titulo">Envase</div>
            <div className="cuerpo">
              <img src="/images/bolsareutil.jpg" alt="Target" />
              x50
            </div>
          </div>
        </div>

        <div className='nobio'>
          <div className="tarjeta">
            <div className="titulo">Bolseta</div>
            <div className="cuerpo">
              <img src="/images/bolsareutil1.jpg" alt="Target" />
              x10
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Bags</div>
            <div className="cuerpo">
              <img src="/images/bolsasreu2.jpg" alt="Target" />
              x6
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Pink Green</div>
            <div className="cuerpo">
              <img src="/images/bolsareu3.jpg" alt="Target" />
              x2
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Eco-bolsa</div>
            <div className="cuerpo">
              <img src="/images/bolsasreu4.jpg" alt="Target" />
              x100
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoBiodegradable