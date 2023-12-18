import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../loading/loading';

const Item = ({ poke }) => {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(poke.url)
            .then(res => res.json())
            .then(data => {
                setPokemonData(data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, [poke.url]);

    return (
        <>
            <div className={styles.card}>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <p className={`${styles.text} ${styles.capitalize}`}>{poke.name}</p>
                        <img
                            className={styles.img}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.url.split("/")[6]}.png`}
                            alt={poke.name}
                        />
                        <div>
                            <p>Weight: {pokemonData.weight}</p>
                            <p>Height: {pokemonData.height}</p>
                        </div>

                    </>
                )}
            </div>
        </>
    );
};

export default Item;
