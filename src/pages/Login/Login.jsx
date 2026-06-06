import {useState, useEffect} from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import styles from './Login.module.css';
import InputField from '../../components/InputField/InputField';
import stylesInput from '../../components/InputField/InputField.module.css';
import Button from '../../components/Button/Button';
import stylesButton from '../../components/Button/Button.module.css';
import Modal from '../../components/Modal/Modal';
import { Link } from "react-router-dom";




const Login = () => {

  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[attempts, setAttempts] = useState(0);
  const[message, setMessage] = useState('');
  const[block, setBlock] = useState(false); 

  useEffect(() => {
    if(attempts > 0) {
      setMessage("Senha incorreta! Tentativas restanres: " + (5- attempts))
    }

    if (attempts >= 5){
      setBlock(true);
    }

  }, [attempts]
);

  const handleSubmit = (event) => {
    event.preventDefault();
    
      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioEncontrado = usuarios.find((u) => u.username === username);

      if (block) {
      setMessage('Conta bloqueada! Número de tentativas excedido.');
      return;
      }

      if(!usuarioEncontrado){
        setMessage("Usuário não existe")
        return;
      }

      if (usuarioEncontrado.password !== password) {
          setAttempts(attempts + 1);
          return;
      }


      if(usuarioEncontrado){
        setMessage("Login efetuado!\nUsuário: " + username + ", Senha: " + password)
        return;
      }
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
              <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
            </div>

            {message && <Modal message={message} onClose={() => setMessage('')} />}

        </form>
      </div>
    </div>
  )
}

export default Login;