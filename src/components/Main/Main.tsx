import { Home } from '../Home'
import { Skills } from '../Skills'
import { Qualification } from '../Qualification'
import { Services } from '../Services'
import { Projects } from '../Projects'
import { Contact } from '../Contact'

export const Main = () => {
  return (
    <main className="main">
      <Home />
      <Skills />
      <Qualification />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}
