import React from 'react';

import Me from '../../assets/imgs/me.jpg'


const Perfil = () => {
    return (
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
                                            <div class="card-trooper-social-proof__image">
                                            <div class="image">
                                            <img src={Me}  alt="Lara Rezende" />
                                            </div>
                                            </div>
                                            </div>
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
    )
}

export default Perfil ;