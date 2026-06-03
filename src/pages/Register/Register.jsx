import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from './Register.module.css';
import stylesInput from '../../components/InputField/InputField.module.css';
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Register = () => {
 
 const [name, setName] = useState('');
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 
    return (
    <div className={styles.container}>
      <h1>Registre-se</h1>

      <form>
        <InputField
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<FaUser className={stylesInput.icon} />}
        />
        <InputField
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<FaUser className={stylesInput.icon} />}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<FaEnvelope className={stylesInput.icon} />}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<FaLock className={stylesInput.icon} />}
        />
        <InputField
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<FaLock className={stylesInput.icon} />}
        />
        <Button type="submit">Registrar</Button>
      </form>
      <div className={styles.signupLink}>
                    <p>Já tem conta? <a href="#">Login</a></p>
                  </div>
    </div>
  )}

  export default Register;