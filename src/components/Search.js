import React from 'react'

const Search = ({search}) => {

    return (
        <section className="search">
        <form>
            <input 
                type="text"
                className="search__input"
                placeholder="Search Pokemons"
                onChange={(e) => search(e.target.value)}
                autoFocus 
                />

        </form>
            
        </section>
    )
}

export default Search
