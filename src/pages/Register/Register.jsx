import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from './Register.module.css';
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
      <h1> Faça o Cadastro</h1>

      <form>
        <InputField
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<FaUser />}
        />
        <InputField
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<FaUser />} 
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<FaEnvelope />}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<FaLock />}
        />
        <InputField
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<FaLock />}
        />
        <Button type="submit">Registrar</Button>
      </form>
    </div>
  )}

  export default Register;