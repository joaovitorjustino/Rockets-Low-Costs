import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Login.css'

const Login = () => {

    const navigate = useNavigate()

    async function validaUsuario() {
        let nome = document.getElementById('nomeUsuario').value;

        if (nome){
            let nomesDB = await axios.get('http://localhost:3000/api/usuario/' + nome)

            if(nomesDB.data[0] != null){
                navigate('/validacao', {state: {dados: nomesDB.data[0]}});                
            }
            else{
                navigate('/cadastro')
            }
            console.log(nomesDB[0])
        }
        console.log('Preencha com algum nome!')
    }
    function cadastro(){
        navigate('/cadastro')
    }
    return(
        <body>
            <div className="container">
                <div className="content_cadastro">
                    <div className="box_login">
                        <input id="nomeUsuario" className="text_box" placeholder="Seu Nome"></input>
                        <button className="button_entrar" onClick={validaUsuario}>Entrar</button>
                        <button className="button_cadastro" onClick={cadastro}>Cadastre-se aqui!</button>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default Login;