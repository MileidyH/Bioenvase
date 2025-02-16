import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link, Outlet } from 'react-router-dom'
import '../style/Dashboard.css'

const Dashboard = () => {
  return (
    <section>
      <Header />
      <div className="producto">
        <h1>Producto</h1>
        <p>En Bioenvase, estamos comprometidos no solo con ofrecer productos sostenibles, sino también con educar y concientizar a nuestros clientes sobre el impacto de sus decisiones de consumo. A través de nuestras campañas y programas de fidelización, alentamos a nuestros compradores a optar por alternativas biodegradables y de larga duración, fomentando prácticas de reducción y reciclaje.</p>
      </div>
      {/* <div className="valores">
        <h1>Valores de Bioenvase</h1>
        <ul>
          <li>Responsabilidad Ambiental: Cada decisión que tomamos se guía por el impacto que generará en nuestro entorno. Nos esforzamos por ser una opción consciente y de bajo impacto en el mercado de empaques y almacenamiento.</li>
          <li>Calidad y Accesibilidad: Nos aseguramos de que cada uno de nuestros productos cumpla con altos estándares de calidad, y los ofrecemos a precios accesibles para que más personas puedan unirse al cambio.</li>
          <li>Educación y Conexión: Nos importa construir una comunidad informada y comprometida. Por ello, realizamos talleres y compartimos información educativa sobre el reciclaje, la biodegradabilidad y el consumo responsable.</li>
        </ul>
      </div>*/}
      <div className="Enlaces">
        <div>
          <Link className='Bio' to='biodegrabables'>* Biodegradables</Link>
          <Link className='Bio' to='nobiodegradables'>* No biodegradables</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}

export default Dashboard