import Country from "./country";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Countries =  ()=> {
const {filter_countries:countries, isLoading} = useGlobalContext()
 
if(isLoading){
  return <Wrapper>
    Loading...
  </Wrapper>
}
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

const Wrapper = styled.div`
 
`

export default Countries