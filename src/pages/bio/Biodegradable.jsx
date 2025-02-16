import React from 'react'
import '../../style/Biodegradable.css'

const Biodegradable = () => {
  return (
    <section>
      <h1>Biodegradable</h1>
      <p>Responsabilidad Ambiental: Cada decisión que tomamos se guía por el impacto que generará en nuestro entorno. Nos esforzamos por ser una opción consciente y de bajo impacto en el mercado de empaques y almacenamiento.</p>
      <div>
        <div className='bio'>
          <div className="tarjeta">
            <div className="titulo">Relevó</div>
            <div className="cuerpo">
              <img src="/images/bolsabio1.jpg" alt="Target" />
              x100
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Bolsa de Maíz</div>
            <div className="cuerpo">
              <img src="/images/bolsabio2.jpg" alt="Target" />
              x100
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Unni</div>
            <div className="cuerpo">
              <img src="/images/bolsabio3.jpg" alt="Target" />
              x100
            </div>
          </div>        
          <div className="tarjeta">
            <div className="titulo">Envase</div>
            <div className="cuerpo">
              <img src="/images/envase3.jpg" alt="Target" />
              x50
            </div>
          </div>
        </div>

        <div className='bio'>
          <div className="tarjeta">
            <div className="titulo">Bolsa compostable</div>
            <div className="cuerpo">
              <img src="/images/bolsabio4.jpg" alt="Target" />
              x100
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Bag Sacola</div>
            <div className="cuerpo">
              <img src="/images/bolsabio5.jpg" alt="Target" />
              x50
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Green Doggy</div>
            <div className="cuerpo">
              <img src="/images/bolsasdogs.jpg" alt="Target" />
              x50
            </div>
          </div>
          <div className="tarjeta">
            <div className="titulo">Eco-envase</div>
            <div className="cuerpo">
              <img src="/images/envasebio1.jpg" alt="Target" />
              x100
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biodegradable