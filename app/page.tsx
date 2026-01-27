import Hero from './sections/Hero'
import FasalTechStory from './sections/FasalTechStory'
import Lessons from './sections/Lessons'
import Now from './sections/Now'
import Projects from './sections/Projects'
import Writing from './sections/Writing'
import Footer from './sections/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <FasalTechStory />
      <Lessons />
      <Now />
      <Projects />
      <Writing />
      <Footer />
    </main>
  )
}
