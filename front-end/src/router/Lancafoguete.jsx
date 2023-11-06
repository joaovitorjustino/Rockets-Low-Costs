import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../style/Lucro_foguete.css'


const Lancafoguete = () => {
    const [fogueteSelecionado, setFogueteSelecionado] = useState(null);
    const location = useLocation();
    const dadosUsuario = location.state?.dados;
    const [lucro, setLucro] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        const getFogueteSelecionado = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v3/rockets/' + dadosUsuario);
                setFogueteSelecionado(response.data);
            
            } catch (error) {
              console.error('Erro ao buscar o foguete selecionado:', error);
            }
        };
      
        getFogueteSelecionado();
    }, []);

    const lucroChange = (e) => {
        setLucro(e.target.value);
    };
    const dateChange = (e) => {
        setData(e.target.value);
    };

    function submitLucro() {
        const novoLucro = {
            foguete: dadosUsuario.rocket_id,
            margemLucro: lucro,
            valorLancamento: dadosUsuario.cost_per_launch,
        };
        fetch('http://localhost:3000/api/valor/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoLucro),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Novo lucro cadastrado ', data);
        })
        .catch((erro) => {
            console.error('Erro', erro);
        });
        setLucro('');
    };

    function submitData() {
        const novoLancamento = {
            dataLancamento: data,
            lancamento: true,
        };
        fetch('http://localhost:3000/api/lancamento/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoLancamento),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Novo lancamento cadastrado ', data);
        })
        .catch((erro) => {
            console.error('Erro', erro);
        });
        setData('');
    };    

    return(
        <>
            <div className="container">
                <div className="foguete">
                    <h2>Foguete escolido</h2>
                    {fogueteSelecionado ? (
                        <div className="content-foguete">
                        <div className="card">
                            <img src={fogueteSelecionado.flickr_images[0]} alt={fogueteSelecionado.rocket_name}></img>
                        </div>
                        <div className="card-informacao">
                            <h3>{fogueteSelecionado.rocket_name}</h3>
                            <p>Tipo do Motor: {fogueteSelecionado.engines.type}</p>
                            <p>Custo do lançamento: {fogueteSelecionado.cost_per_launch}</p>
                            <p>Ativo: {fogueteSelecionado.active ? 'Sim' : 'Não'}</p>
                        </div> 
                    </div>
                ) : (
                    <p>Carregando...</p>
                  )}
                </div>
                <div className="lucrodata">
                    <h2>Data e lucro</h2>
                    <div className="content-lucrodata">
                        <div className="box">
                            <input className="number_box" value={lucro} placeholder="Lucro Desejado" onChange={lucroChange}></input>
                            <input className="number_box" value={data} placeholder="Data de Lançamento" onChange={dateChange}></input>
                            <button className="button_alterar" onClick={() => {submitLucro(); submitData();}}>Lançar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Lancafoguete;