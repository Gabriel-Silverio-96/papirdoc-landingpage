import React from 'react';

import imgBanner from '../assets/img/banner/banner-main.png';

import bannerPrimary from '../assets/img/banner/banner-trabalhe-rapido.png';
import bannerSecond from '../assets/img/banner/banner-modo-noturno.png';
import bannerThird from '../assets/img/banner/banner-implementacao.png';

import './style.css'

const Index = () => (
    <div className="container">
        <div className="banner-main">
            <div className="content">
                <h1>Hora de criar documentos incríveis</h1>
                <p>O seu dia a dia muito mais organizado</p>
            </div>
        </div>
        <img className="banner-img" src={imgBanner} alt="Banner editor papirDoc"></img>

        <div className="column">
            <div className="text-col">
                <h2>Trabalhe rápido</h2>
                <p>Com uma interface simples e intuitiva, e
                com recursos necessários, realize seus
                textos mais rápido
                </p>
            </div>
            <div className="img-col">
                <img className="banner" src={bannerPrimary} alt="Banner trabalhe rápido"></img>
            </div>
        </div>

        <div className="column column-reverse">
            <div className="text-col">
                <h2>Modo noturno</h2>
                <p>Proteja sua visão, tenha uma leitura e
                escrita mais confortável, mantendo seu
                bem estar
                </p>
            </div>
            <div className="img-col">
                <img className="banner" src={bannerSecond} alt="Banner modo turno"></img>
            </div>
        </div>

        <div className="column">
            <div className="text-col">
                <h2>Implementação</h2>
                <p>O papirDoc é uma solução free, visite o
                repositório, e conheça mais sobre o projeto
                </p>
            </div>
            <div className="img-col">
                <img className="banner" src={bannerThird} alt="Banner implementacao"></img>
            </div>
        </div>
    </div>   
)

export default Index;