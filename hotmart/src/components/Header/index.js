import React from 'react';
import Typewriter from 'typewriter-effect';

import Logo from '../../assets/imgs/hotmart-logo.svg';


const Header = () => {
    return (
      
    <div className="header">    
      <div class="header__primary">
        <div class="header__primary-container">
          <div class="header__logo">
          <a href="/jobs/pt-BR"  class="nuxt-link-exact-active nuxt-link-active">
          <span class="header__logo-image">
                <picture class="image image--transparent">
                  <img src={Logo} alt="Hotmart"/>
                    </picture>
                    </span> 
                     <span class="header__logo-label">Jobs</span>
            </a>
              
                  
                  </div>
                  </div>
                  </div>
                                
    <div class="hero">
      <div  class="about__container">
        <div class="hero__container" >
            <div class="hero__title" >
                <span class="tit" >Lugar de quem ama</span>
                </div> 
                <div class="hero__typewriter" >
                <div class="typewriter">
                       <h1><Typewriter
                                options={{
                                strings: ['otimização de processos', 'marketing digital'],
                                autoStart: true,
                                 loop: true,
                               }}
                         />
                      </h1>
                  </div>
                </div>
              </div>
          </div>
      </div>

    </div>
    )

}

export default Header ;