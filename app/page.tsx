import Catalog from "./components/catalog"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Offer from "./components/offer"
import Stat from "./components/stats"
export default function home(){
  return(
    <body className="">
<Hero/>
<Catalog/>
<Offer/>
<Stat/>
<Contact/>
<Footer/>

    </body>
  )
}