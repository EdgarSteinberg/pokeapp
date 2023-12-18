import { NavLink } from "react-router-dom"
import styles from './styles.module.css'
import pokedex from '../../assets/logo.png'

const NavBar = () => {

    const categorias = ["electric", "normal", "fighting", "poison", "flying", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "psychic", "ice", "dragon", "dark", "fairy"]

    return (
        <>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <NavLink to={'/'}> <img className={styles.img} src={pokedex} alt="pokedex" /> </NavLink>

                    <NavLink to={'/'} className={`${styles.nav_bar} ${styles.todos}`}>Todos</NavLink>
                    {categorias.map((cat, index) => <NavLink className={`${styles.nav_bar} ${styles[cat]}`} key={index} to={`/type/${cat}`}>
                        {/* {cat} */} {cat.charAt(0).toUpperCase() + cat.slice(1)} {/* Convierte la primera letra a mayúscula */}
                    </NavLink>)}
                    <NavLink to={'/contacto'} className={`${styles.nav_bar} ${styles.todos}`}>Contacto</NavLink>
                </div>
            </div>
        </>
    )
}

export default NavBar