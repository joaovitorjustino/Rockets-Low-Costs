import React, {useState} from 'react';
import '../style/Cadastro.css'

const Cadastro = () =>{
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

    const nomeChange = (e) => {
        setNome(e.target.value);
    };
    const idadeChange = (e) => {
        setIdade(e.target.value);
    };
    const submit = () => {
        const novoUsuario = {
            nome: nome,
            idade: idade,
        };
        fetch('http://localhost:3000/api/usuario/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoUsuario),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Usuário cadastrado ', data);
        })
        .catch((erro) => {
            console.error('Erro ao cadastrar ', erro);
        });
        setNome('');
        setIdade('');
    };
    return(
        <div className="container">
            <div className="content_cadastro">
                <div className="box">
                    <input className="textbox" value={nome} onChange={nomeChange} placeholder="Seu Nome"></input>
                    <input className="numberbox" value={idade} onChange={idadeChange} placeholder="Sua idade"></input>
                    <button className="buttoncadastro" onClick={submit}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;