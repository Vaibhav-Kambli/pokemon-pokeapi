import React from 'react'

const Pokemon = ({pokemons}) => {

    return (
        <>
                {pokemons.map(pokemon => (
                    <div className="card" key={pokemon.id}>
                        <div className="card__inner">

                        
                        <div className="card__image">
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                        </div>
                        <div className="card__text">
                            <h4><strong>{pokemon.name.toUpperCase()}</strong></h4>
                        </div>
                        </div>
                    </div>
                ))} 
        </>
    )
}

export default Pokemon
