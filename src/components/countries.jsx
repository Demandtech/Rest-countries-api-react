import Country from "./country";
import { useGlobalContext } from "../context";

const Countries =  ()=> {
const {filter_countries:countries} = useGlobalContext()
 
 return(
  <section>
    <div className="countries-container">
       {countries.map((country, index)=> {
        return <Country key={index} {...country}/>
       })}
    </div>
  </section>
 )
}

export default Countries