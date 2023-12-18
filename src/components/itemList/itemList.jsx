import Item from "../item/item"

const ItemList = ({pokemon}) => {
    return(
        <>
           {pokemon && pokemon.length > 0 ? (
                pokemon.map((poke, index) => (
                    
                    <Item key={index} poke={poke}/>  
                ))
            ) : (
                <p>No se han encontrado Pokémon.</p>
            )}
        </>
    )
}

export default ItemList