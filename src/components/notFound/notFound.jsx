import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <>
        <h1>Not Found Error 404</h1>
        <Link to={'/'}><Button variant="primary">Volver al Inicio</Button></Link>
        </>
    )
}

export default NotFound