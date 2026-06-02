import {useState} from 'react';

import { FaUser, FaLock } from 'react-icons/fa';

import styles from './Login.module.css';


const Login = () => {

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando dados: " + username + " - " + password);
  
  }

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <h1>Faça Login</h1>
            <div className={styles.inputField}> 
            <input type="text" placeholder='Digite seu email' onChange={(e) => setUsername(e.target.value)} />
            <FaUser className={styles.icon} />
            </div>
            <div className={styles.inputField}>
            <input type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
            <FaLock className={styles.icon} />
            </div>

            <div className= {styles.recallForget}>
              <label>
                <input type="checkbox" />
                Lembrar-me
              </label>
              <a href="#">Esqueci minha senha</a>
            </div>
            <button type="submit">Entrar</button>

            <div className={styles.signupLink}>
              <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login;