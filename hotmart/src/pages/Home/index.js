import React from 'react';

import Entrevista from '../../assets/imgs/about/entrevista.jpg';
import Tela from '../../assets/imgs/about/tela.jpg';
import Diviertete from '../../assets/imgs/about/diviertete.jpg';
import Pride from '../../assets/imgs/about/pride.jpg';
import Cofe from '../../assets/imgs/about/cofe.jpg';
import Niver from '../../assets/imgs/about/niver.jpg';

const Home = () => {
    return (
        <article>
            <div  class="about__container">
            <div  className="about__title">
                <h2 class="title">
        Existimos para permitir que
        as pessoas vivam de suas 
        paixões!
      </h2>
            </div>
            <div className="about__body">
                <p> A Hotmart é uma empresa que promove empreendedorismo e educação por meio da criação e 
                    divulgação de produtos digitais. Criamos uma plataforma completa para quem quer vender, 
                    promover ou comprar cursos online, vídeos, assinaturas, e-books, ingressos para eventos e 
                    outras mídias digitais.
                </p>
                <p> São milhões de usuários ao redor do planeta, vendas em mais de 188 países e escritórios
                    em várias partes: Brasil, Espanha, México, Colômbia, Holanda e Estados Unidos! Além disso, 
                    também já estamos atuando em países como o Reino Unido e a França!
                </p>
                <p>Estamos há 4 anos entre as 
                    melhores médias empresas de tecnologia para trabalhar, segundo o Great Place to Work. Nós valorizamos
                    muito a nossa cultura e, mesmo em constante crescimento e visível expansão global, conseguimos 
                    manter a essência que nos tornou líder no mercado de educação digital. Venha fazer 
                    parte dessa história!
                </p>
            </div>
            <div class="about__photos">
            <div class="image-slide aspect-ratio--2.2:1">
            <div class="image-slide__items" >
                <div class="image-slide__item">
                    <div class="card-image-caption">
                        <div class="card-image-caption__image">
                            <picture class="aspect-ratio--2.2:1 border-radius--rounded image">
                                <img src={Entrevista}  alt="Gravação em um de nossos estúdios" class=" lazyloaded" />
                            </picture>
                                    </div>
                                    <div class="card-image-caption__wrapper">
                                        <div class="card-image-caption__caption">
                        Gravação em um de nossos estúdios
                </div>
                </div>
                </div>
                </div>
                <div class="image-slide__item" >
                    <div class="card-image-caption">
                        <div class="card-image-caption__image">
                            <picture class="aspect-ratio--2.2:1 border-radius--rounded image">
                                <img src={Diviertete} alt="Divirta-se: um dos nossos mantras" class=" lazyloaded"/>
                                    </picture>
                                    </div> 
                                    <div class="card-image-caption__wrapper">
                                        <div class="card-image-caption__caption">
                        Divirta-se: um dos nossos mantras
                </div>
                </div>
                </div>
                </div>
                <div class="image-slide__item image-slide__item--show">
                    <div class="card-image-caption">
                        <div class="card-image-caption__image">
                            <picture class="aspect-ratio--2.2:1 border-radius--rounded image">
                                <img src={Tela}  alt="Hack Week: codar pode ser divertido (e apaixonante)!" class=" lazyloaded"/>
                                    </picture>
                                    </div> 
                                    <div class="card-image-caption__wrapper">
                                        <div class="card-image-caption__caption">
                         Hack Week: codar pode ser divertido (e apaixonante)!
                </div>
                </div>
                </div>
                </div>
                <div class="image-slide__item">
                    <div class="card-image-caption">
                        <div class="card-image-caption__image">
                            <picture class="aspect-ratio--2.2:1 border-radius--rounded image">
                                <img src={Pride}  alt="Dia do Orgulho LGBTQIA+: na Hotmart todo mundo tem voz!" class=" lazyloaded"/>
                                </picture>
                                </div> <div class="card-image-caption__wrapper" ><div class="card-image-caption__caption" >
                         Dia do Orgulho LGBTQIA+: na Hotmart todo mundo tem voz!
                </div>
                </div>
                </div>
                </div>
                <div class="image-slide__item">
                    <div class="card-image-caption">
                        <div class="card-image-caption__image">
                            <picture class="aspect-ratio--2.2:1 border-radius--rounded image">
                                <img src={Cofe}  alt="Missão Suporte: buscando talentos para atender nossos clientes" class=" lazyloaded"/>
                                </picture>
                                </div> 
                                <div class="card-image-caption__wrapper">
                                    <div class="card-image-caption__caption">
                         Missão Suporte: buscando talentos para atender nossos clientes
                </div>
                </div>
                </div>
                </div>
                <div class="image-slide__item">
                    <div class="card-image-caption" >
                        <div class="card-image-caption__image">
                            <picture class="aspect-ratio--2.2:1 border-radius--rounded image">
                            <img src={Niver} alt="Aniversariantes do Mês: sempre um momento muito especial" class=" lazyloaded"/>
                            </picture>
                            </div> <div class="card-image-caption__wrapper" ><div class="card-image-caption__caption">
                         Aniversariantes do Mês: sempre um momento muito especial
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>   
            </div>
            </div>
    </article>
    )
}

export default Home ;