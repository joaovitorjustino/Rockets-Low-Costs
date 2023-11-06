import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import "../style/Validacao.css"


const Validacao = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dadosUsuario = location.state?.dados;

    if (dadosUsuario){
        console.log(dadosUsuario);
    }

    function confirmar(){
        navigate('/foguetes', { state: {dados: dadosUsuario}})
    }

    function cancelar(){
        navigate('/')
    }

    return(
        <div className="container">
        <div className="content_cadastro">
            <div className="box-validacao">
                <h2>Sua idade é:</h2>
                <p className="idade" id="idade">{dadosUsuario.idade}</p>
                <button className="button_valida" onClick={confirmar}>Confirmar</button>
                <button className="button_cancelar" onClick={cancelar}>Cancelar</button>
            </div>
        </div>
    </div>
    )
};

export default Validacao;