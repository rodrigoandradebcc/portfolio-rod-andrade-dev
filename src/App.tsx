import { Header, Footer } from './components/layout'
import { Hero, Resume, Experience, Skills, Education, Contact } from './components/sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Resume />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
