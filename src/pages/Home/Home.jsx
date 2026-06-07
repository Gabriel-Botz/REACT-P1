import styles from './Home.module.css'
import stylesLogin from '../Login/Login.module.css' 
import Button from '../../components/Button/Button'
import stylesButton from '../../components/Button/Button.module.css'
import { Link } from 'react-router-dom'

const Home = () => {



    return(
        <div>
             <div className={styles.container}>
        
              <h1>Bem Vindo!</h1>

              <div className={styles.buttons}>
              <Button><Link to="/login">Faça Login</Link></Button>
              <Button><Link to="/register">Registre-se</Link></Button>
              </div>
            </div>
        </div>
    )
}

export default Home;