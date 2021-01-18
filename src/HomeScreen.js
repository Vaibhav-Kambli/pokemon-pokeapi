import React, { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
import Loader from './components/Loader'
import Footer from './components/Footer'
import axios from "axios"
import pokemon from "./Pokemon_logo.svg.png";

const HomeScreen = () => {
    const [loading, setLoading] = useState(false)  
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        const getData =  async () =>{
            const poke = []
            const pokemonNumber = 300
            try{
                for(let i = 1; i <= pokemonNumber; i++){
                    setLoading(true)
                    const  {data}  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    poke.push(data)
                    setLoading(false)
                }
                setPokemons(poke)

            }catch(err){
                console.log(err)
            }
          
        }
        getData();
       
    }, [])

    return (
        <div className="container">
            <div className="app__logo">
				<img src={pokemon} alt={"pokemon"} />          
			</div>
        
            {loading ? (<Loader/>) : (
            <>
            <section className="cards">
             <Pokemon pokemons={pokemons}/>
             </section>
             <Footer/>
            </>
            )}
        
        </div>
    )
}

export default HomeScreen