import { Header } from "./components/header"
import { Tittle } from "./components/tittle"
import { Seccion1 } from "./components/seccion1"
import { Seccion2 } from "./components/seccion2"
import {Footer} from "./components/footer"
const App = () => {
  return (
    <div>
      <section className="bg-[url(src/assets/images/image-hero.jpg)] bg-cover h-[600px] w-[100%]">
        <Header />
        <Tittle />
      </section>
      <section>
        <Seccion1 />
        <Seccion2 />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default App

