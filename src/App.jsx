import Header from './components/Header'
import Hero from './components/Hero'
import Differentials from './components/Differentials'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Differentials />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
