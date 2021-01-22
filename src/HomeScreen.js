import React, { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
import Loader from './components/Loader'
import Footer from './components/Footer'
import Search from './components/Search'
import axios from "axios"
import pokemon from "./Pokemon_logo.svg.png";

const HomeScreen = () => {
    const [loading, setLoading] = useState(false)  
    const [pokemons, setPokemons] = useState([])
    const [filteredContent, setFilteredContent] = useState([])
 

    const searchPokemon = (searchQuery) => {
        let filteredPokemons = []

        
        pokemons.forEach((pokemon) => {
            if(pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())){
                filteredPokemons.push(pokemon)
            }
        })
        setFilteredContent(filteredPokemons)

    }

    useEffect(() => {
        const getData =  async () => {
            const poke = []
            const pokemonNumber = 90
            try{
                for(let i = 1; i <= pokemonNumber; i++){
                    setLoading(true)
                    const  {data}  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    poke.push(data)
                }
                setPokemons(poke)
                setFilteredContent(poke)
                setLoading(false)

            }catch(err){
                console.log(err)
            }
          
        }
        getData();
       
    }, [])

    return (
        <div className="container">
            <header className="app__logo">
				<img src={pokemon} alt={"pokemon"} />          
			</header>
        
            {loading ? (<Loader/>) : (
            <div className="pokemon__container">
            <Search search={searchPokemon}/>
            <div className="pokemon__list">
            <section className="cards">
             <Pokemon pokemons={filteredContent}/>
             </section>
             </div>
             <Footer/>
            </div>
            )}
        
        </div>
    )
}

export default HomeScreen