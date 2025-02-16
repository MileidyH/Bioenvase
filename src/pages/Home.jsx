import Footer from "../components/Footer"
import Header from "../components/Header"
import '../style/Home.css'

const Home = () => {
  return (
    <section>
      <Header />
      <div className="inicio">
        <div>
          <h1>Bioenvase</h1>
          <p>Bioenvase es una tienda que vende productos plásticos, tanto biodegradables como no biodegradables, es un tipo de negocio que ofrece una variedad de artículos para el empaque y almacenamiento, pero con un enfoque en la sostenibilidad.
            Este tipo de tienda suele atraer a clientes que buscan reducir su huella ecológica, ya sea a través de productos completamente biodegradables o de una transición hacia un consumo más responsable.</p>
        </div>
        <div className="vision">
          <h1>Visión</h1>
          <p>Ser un referente en el mercado de empaques sostenibles, ofreciendo productos que equilibren las necesidades del presente con el cuidado del medio ambiente, fomentando la transición hacia un mundo más consciente y ecológicamente responsable.</p>
        </div>
        <div className="mision">
          <h1>Misión</h1>
          <p>Proveer a nuestros clientes de productos de plástico biodegradables y no biodegradables de alta calidad, ofreciendo soluciones accesibles y sostenibles para el empaque y almacenamiento. Nos comprometemos a promover la educación ambiental y a trabajar continuamente para reducir el impacto ecológico, impulsando un consumo responsable y la adopción de alternativas que beneficien tanto a las personas como al planeta.</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default Home