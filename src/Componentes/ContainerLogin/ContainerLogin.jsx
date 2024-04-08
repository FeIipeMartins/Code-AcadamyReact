import React from 'react';
import '../ContainerLogin/ContainerLogin.css';

function Login() {
    return (
        <div className="container">
            <div>
                <img src="../../Assets/Imagens/CodeAcademyLogoSemFundo.png" alt="" />
                <h2>Login</h2>
            </div>
            
            <form action="">
                <label htmlFor="username">Digite seu E-mail:</label>
                <input type="text" id="username" name="username" placeholder="Digite seu E-mail" />
            
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Digite sua senha" />
            
                <input type="submit" value="Entrar" className="button_login" />
                <a href="FazerCadastro.html">
                    <input type="button" value="Cadastrar-se" className="button_registrar" />
                </a>
            </form>
            
            <div className="Sign_modes">
                <img src="../../Assets/Imagens/SignGoogle.png" alt="" />
                <img src="../../Assets/Imagens/SignApple.png" alt="" />   
                <img src="../../Assets/Imagens/Signfacebook.png" alt="" />
            </div>
        </div>
    );
}

export default Login;