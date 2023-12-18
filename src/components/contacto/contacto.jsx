import { useState } from "react"
import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';

const Contacto = () => {
    /*  Ejemplo 1
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
    
    
        const handleChangeName = (e) => {
            setName(e.target.value)
            
        }
        const handleChangeEmail= (e) => {
            setEmail(e.target.value)
        } 
    
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log("Nombre:", name);
            console.log("Email:", email);
        } */

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviado", valores)
        // Aquí podrías agregar cualquier lógica de envío de datos
        resetForm();
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    const resetForm = () => {
        setValores({
            nombre: '',
            email: '',
            telefono: ''
        });
    }
    return (
        <>
            <div  className={styles.flex}> 
                <form onSubmit={handleSubmit}>
                    <input
                        className={styles.flex}
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={valores.nombre}
                        // onChange={({ target }) => setName(target.value)}
                        onChange={handleValores}
                        name="nombre"
                    />
                    <input
                        className={styles.flex}
                        type="email"
                        placeholder="Ingrese su email"
                        value={valores.email}
                        // onChange={({ target }) => setEmail(target.value)}
                        onChange={handleValores}
                        name="email"
                    />
                    <input
                        className={styles.flex}
                        type="phone"
                        placeholder="Ingrese su telefono"
                        value={valores.telefono}
                        // onChange={({ target }) => setEmail(target.value)}
                        onChange={handleValores}
                        name="telefono"
                    />
                    <Button className={styles.btn} type="submit" variant="primary">Enviar</Button>
                </form>
            </div>
        </>
    )
}

export default Contacto