import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from './Register.module.css';
import stylesInput from '../../components/InputField/InputField.module.css';
import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import stylesModal from '../../components/Modal/Modal.module.css';

const Register = () => {
 
 const [name, setName] = useState('');
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = (event) => {
  event.preventDefault();

  if (!name || !username || !email || !password || !confirmPassword) {
    setMessage('Por favor, preencha todos os campos.');
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioExistente = usuarios.find((usuario) => usuario.username === username);
  const emailExistente = usuarios.find((usuario) => usuario.email === email);


  if (emailExistente){
    setMessage('Este email já está em uso')
    return;
  }

  if (usuarioExistente) {
    setMessage('Nome de usuário já existe. Por favor, escolha outro.');
    return;
  }

  if(password !== confirmPassword) {
    setMessage('As senhas não coincidem.');
    return;
  }

 const novoUsuario = { name, username, email, password };

 usuarios.push(novoUsuario);
 localStorage.setItem('usuarios', JSON.stringify(usuarios));
 setMessage('Usuário registrado com sucesso!'); 



}
    return (
    <div className={styles.container}>
      <h1>Registre-se</h1>

      <form onSubmit={handleSubmit}>
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

        {message && <Modal message={message} onClose={() => setMessage('')} />}

      <div className={styles.signupLink}>
                    <p>Já tem conta? <Link to="/login">Faça Login</Link></p>
                  </div>
    </div>
  )}

  export default Register;