import {useState} from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './Login.module.css';
import InputField from '../../components/InputField/InputField';
import stylesInput from '../../components/InputField/InputField.module.css';
import Button from '../../components/Button/Button';
import stylesButton from '../../components/Button/Button.module.css';


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
           
              <InputField
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                icon={<FaUser className={stylesInput.icon} />}
              />
            
              <InputField
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<FaLock className={stylesInput.icon} />}
              />

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