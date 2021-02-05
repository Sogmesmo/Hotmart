import React from 'react'

import Entrevista from '../../assets/imgs/about/entrevista.jpg';
//import Tela from '../../assets/imgs/about/tela.jpg';
//import Diviertete from '../../assets/imgs/about/diviertete.jpg';
//import Pride from '../../assets/imgs/about/pride.jpg';
//import Cofe from '../../assets/imgs/about/cofe.jpg';
//import Niver from '../../assets/imgs/about/niver.jpg';


const Slideshow = () => {
    return (
        <div className="containerSlide">
                <div className="each-slide ">
                    <div>
                        <img src={Entrevista} alt="Gravação em um de nossos estúdios" />
                        <p>Gravação em um de nossos estúdios</p>
                    </div>
                </div>
        </div>
    )
}

export default Slideshow;