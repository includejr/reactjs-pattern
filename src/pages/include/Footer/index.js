import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../../assets/img/kadoo.png';
import Logo2 from '../../../assets/img/copy.png';
import Aline from '../../../assets/img/aline.jpeg';
import Otavio from '../../../assets/img/otavio.jpg';
import Flaviano from '../../../assets/img/flaviano.jpeg';
import Victoria from '../../../assets/img/victoria.jpeg';
import Joao from '../../../assets/img/joao.jpeg';
import Gilberto from '../../../assets/img/gilberto.jpeg';
import Lucas from '../../../assets/img/lucas.jpeg';
import Joathan from '../../../assets/img/joathan.jpeg';
import { Row, Card, Section, Menu } from './styles';


const array = [
    {
        name: 'Luis Otávio',
        img: Otavio,
        position: 'Desenvolvedor',
        links: [
            {
                link: 'https://github.com/luisotavio756',
                icon: faGithub
            },
            {
                link: 'https://www.instagram.com/luisotaviioc/',
                icon: faInstagram
            },
            {
                link: 'https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-87851517a/',
                icon: faLinkedin
            }
        ]
    },
    {
        name: 'Flaviano',
        img: Flaviano,
        position: 'Desenvolvedor',
        links: [
            {
                link: 'https://github.com/flavisXavier',
                icon: faGithub
            },
            {
                link: 'https://instagram.com/flavisxavier',
                icon: faInstagram
            },
            {
                link: 'https://www.linkedin.com/in/flavianoxavier',
                icon: faLinkedin
            }
        ]
    },
    {
        name: 'Jonhata',
        img: Joathan,
        position: 'Empreendedor',
        links: [
            {
                link: 'https://www.facebook.com/jonhata.starrelres',
                icon: faFacebook
            },
            {
                link: 'https://www.instagram.com/jonhata.starrelres/',
                icon: faInstagram
            },
        ]
    },
    {
        name: 'Aline',
        img: Aline,
        position: 'Pesquisadora',
        links: [
            {
                link: 'http://www.linkedin.com/in/aline-h-alves',
                icon: faLinkedin
            },
            {
                link: 'https://www.instagram.com/_aliness2',
                icon: faInstagram
            },
        ]
    },
    {
        name: 'Victória',
        img: Victoria,
        position: 'Pesquisadora',
        links: [
            {
                link: 'https://www.linkedin.com/in/anna-victória-ferreira-201b4a161',
                icon: faGithub
            },
            {
                link: 'https://github.com/Annavictoriaferreira',
                icon: faLinkedin
            },
            {
                link: 'https://instagram.com/annavictoriaferreira_?igshid=1bdrh2pnsxk5o',
                icon: faInstagram
            },
        ]
    },
    {
        name: 'Lucas',
        img: Lucas,
        position: 'Pesquisador',
        links: [
            {
                link: 'https://github.com/lucascc19',
                icon: faGithub
            },
            {
                link: 'https://www.linkedin.com/in/lucas-oliveira-4617101a0/',
                icon: faLinkedin
            },
            {
                link: 'https://www.instagram.com/llucasoliv/',
                icon: faInstagram
            },
        ]
    },
    {
        name: 'Gilberto',
        img: Gilberto,
        position: 'Pesquisador',
        links: [
            {
                link: 'https://www.linkedin.com/in/gilberto-junior-rodrigues-de-oliveira-333a09181/',
                icon: faLinkedin
            },
            {
                link: 'https://www.instagram.com/_gilbertojnr/?hl=en',
                icon: faInstagram
            },
        ]
    },
    {
        name: 'João Emerson',
        img: Joao,
        position: 'Pesquisador',
        links: [
            {
                link: 'https://github.com/joaoemersonufc',
                icon: faGithub
            },
            {
                link: 'https://www.linkedin.com/in/joaoemerson-profissional/',
                icon: faLinkedin
            },
            {
                link: 'https://www.instagram.com/joaoemerson._/',
                icon: faInstagram
            },
        ]
    },
    
];

export default function Footer() {
    var his = useLocation().pathname;

    return (
        <Row id="footer" style={{ display: his == '/parceiros' ? 'none' : ''}}>
            <Section type="0">
                <Row>
                    <div className="col-12 logo-text">
                        <div className="title">
                            <h1>Este projeto está sendo uma parceria entre</h1>
                        </div>
                        <div className="links">
                            <p><a href="https://includejr.com.br" target="_blank">Include Jr</a> e <a href="https://www.instagram.com/kadootecnologia/?hl=pt-br" target="_blank">Kadoo Tecnologia</a></p>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="divider"></div>
                        <Section type="1">
                            <p>Copyright © 2020 Kadoo LTDA. Todos os direitos reservados.</p>
                        </Section>
                    </div> */}
                </Row>
                <Row>
                    <div className="col-12 contrib">
                        <h3><FontAwesomeIcon icon={faUsers}/> Contribuidores</h3>
                    </div>
                    { array.map(item => (
                        <div key={item.name} className="col-3" style={{ marginTop: 10 }}>
                            <Card>
                                <div className="img">
                                    <img src={ item.img } alt=""/>
                                </div>
                                <div className="desc">
                                    <h2>{ item.name }</h2>
                                    <p>{ item.position }</p>
                                </div>
                                <div className="social">
                                    { item.links.map(itemLink => (
                                        <a href={ itemLink.link } target="_blank">
                                            <FontAwesomeIcon icon={ itemLink.icon }/>
                                        </a>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    ))}
                </Row>
            </Section>
            <div className="col-12 copy" >
                <p>Copyright © CoronaInfo</p>
            </div>
        </Row>
    );
}
