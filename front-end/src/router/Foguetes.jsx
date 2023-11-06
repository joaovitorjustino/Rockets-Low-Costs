import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../style/Foguete.css'


const Foguete = () => {
    const [foguetes, setFoguetes] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const nomeUsuario = location.state?.dados;
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/rockets')
        .then((response) => {
            setFoguetes(response.data);
        })
        .catch((error) => {
            console.error('API error: ', error)
        });
    }, []);
    
    function lancamento(foguete){
        navigate('/lancafoguetes', {state: {dados: foguete}})
    }
    
    return(
      <>
        <div className="header_texto">
            <h2>Olá {nomeUsuario.nome}, selecione o lançamento:</h2>
        </div>
        <div class="container">
            {foguetes.map((foguete) => (
                <div className="content" id="{foguete.rocket_id}" key={foguete.rocket_id}>
                    <div className="card">
                        <img src={foguete.flickr_images[0]}></img>
                    </div>
                    <div className="card-informacao">
                        <h3>{foguete.rocket_name}</h3>
                        <p>Nome da Missão: {foguete.mission_name}</p>
                        <p>Ano do Lançamento: {foguete.first_flight}</p>
                    </div>
                    <button className="butto-lancamento" onClick={()=>lancamento(foguete.rocket_id)}>Lançar Foguete!</button>
                </div>
            ))}
        </div>
      </>  

    )
};

export default Foguete;