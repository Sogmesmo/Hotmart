import React from 'react';
import Slideshow from '../../components/Slide/index.js';


import Imagemap from '../../assets/imgs/map.svg'
import Me from '../../assets/imgs/me.jpg'


const Home = () => {
    return (
    <article>
        
            <div  className="about__title">
                <h2 class="titl">
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
            <Slideshow/>
            <div class="offices">
                <div class="offices__container">
                    <div class="offices__body">
                        <p>A Hotmart está presente com escritórios no <strong>Brasil</strong>, 
                <strong>Estados Unidos</strong>, <strong>México</strong>, <strong>Colômbia</strong>,
                <strong>Espanha</strong> e <strong>Holanda</strong>,
                além de Troopers, que é como chamamos nossos colaboradores, na <strong>França</strong> 
                e na <strong>Inglaterra</strong>.
                </p>
                </div> 
                   <div class="offices__map" >      
                    <img src={Imagemap} alt="Lugares"/>                           
                   </div>
                </div>
             </div>
                 <div class="carousel__container"> 
                             <div class="carousel__title">
                                 <h3 class="title">
                                     Como é trabalhar na Hotmart
                                </h3>
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide-swiper-slide-active">
                                            <div class="card-trooper-social-proof">
                                                <div class="card-trooper-social-proof__avatar">
                                                <div class="card-trooper-social-proof__wrapper">
                                                <div class="card-trooper-social-proof__name" >
                                                         Geice Gomes
                                                        </div>
                                                <div class="card-trooper-social-proof__job-role">
                                                         Programadora Jr - Brasil
                                                        </div>
                                                    </div>
                                                    <div class="card-trooper-social-proof__images">
                                                        <div class="images">
                                                            <img src={Me}  alt="Lara Rezende" />
                                                            </div>
                                                    </div></div>
                                                </div>
                                                <div class="card-trooper-social-proof__body">
                                                    "Se você busca oportunidades e um lugar que lhe acolherá e apoiará em suas decisões, 
                                                    a Hotmart deve ser a sua escolha para trabalhar. Aqui encontrei liberdade para seguir 
                                                    a profissão que sempre quis e total autonomia para tomar minhas decisões."
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