import vector from './img/icons/Vector.svg'
import vector1 from './img/icons/Vector-3.svg'
import vector2 from './img/icons/Vector-1.svg'
import vector3 from './img/me.jpg'
import landing from './img/slider/landing.jpg'
import mems from './img/slider/mems.jpg'
import portfolio from './img/slider/portfolio.jpg'
import restouran from './img/slider/restouran.jpg'


function App() {

  return (
    <div className="App">
        <div>
          <header>
              <div class="container">
                <div class="header-left">
                  <div class="header-titles">
                    <h1 class="header-title">ALIAKSEI DZIATSEL<br /><span>Frontend Developer</span></h1>
                  </div>

                  <div class="titles-contacts">
                                  <ul>
                                      <li>
                                          <a href="https://github.com/LEX-DAY">
                                              <img src={vector}/>
                                              <p class="contact">https://github.com/LEX-DAY</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://www.linkedin.com/in/lex-day">
                                              <img src={vector1}/>
                                              <p class="contact">ALIAKSEI DZIATSEL</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="mailto:lesha.dyatel@mail.ru" type="email">
                                              <img src={vector2}/>
                                              <p class="contact">lesha.dyatel@mail.ru</p>
                                          </a>
                                      </li>
                                  </ul>
                              </div>

                </div>

                <div class="header-right">
                  <img src={vector3} alt="" class="header-img"></img>
                  <div class="img-titles">
                      <h1 class="img-title">ABOUT ME</h1>
                      <p class="img-subtitle">I strive for excellence in web development, and have a passion for creating interactive and intuitive user interfaces. 
                          I have experience in developing with modern technologies, such as HTML5, CSS3 and JavaScript. 
                          I am ready for continuous learning and accepting new challenges in the fast-changing web development environment.
                      </p>
                  </div>
              </div>
              </div>
          </header>


          <main>
          <div class="container">
            
              <div class="main-content">
                  <div class="main-left">
                      <div class="main-section">
                          <div class="section-titles">
                              <div class="titles">
                                  <h1 class="section-title">EDUCATION</h1>
                                  <div class="section-subtitles">
                                      
                                      <h2 class="subtitle-year">2016-2020</h2>
                                      
                                      <div class="subtitle-name">
                                          <h2>Belarusian State University</h2>
                                          <p class="subtitle-text">Physical, New materials and Technologies</p>
                                      </div>

                                  </div>
                                
                              </div>
                          </div>
                        
                          <div class="section-titles">
                              <div class="titles">
                                  <h1 class="section-title">EXPERIENCE</h1>
                                  <div class="section-subtitles">
                                      <h2 class="subtitle-year">2024</h2>

                                      <div class="subtitle-name">
                                          <h2>INTELLIGENT TECHNOLOGIES</h2>
                                          <p class="subtitle-text">Frontend Developer</p>
                                      </div>
                                      
                                  </div>
                                  <div class="section-subtitles">
                                      <h2 class="subtitle-year">2021-2022</h2>

                                      <div class="subtitle-name">
                                          <h2>BelCrystalService</h2>
                                          <p class="subtitle-text">Implementation Engineer. Project implementation and testing of new hardware and software</p>
                                      </div>
                                      
                                  </div>
                                  <div class="section-subtitles">
                                      <h2 class="subtitle-year">2019-2021</h2>

                                      <div class="subtitle-name">
                                          <h2>Institute of Physics NAS of Belarus</h2>
                                          <p class="subtitle-text">Engineer. Research, scientific, academic activities</p>
                                      </div>
                                      
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="main-right">
                      <div class="main-section">
                          <div class="section-titles">

                              <div class="section-skills">
                                  <h1 class="section-title">SKILLS</h1>
                                  <div class="skill-subtitles">
                                      <h2 class="subtitle-skill">HTML, CSS, SQL, NodeJS, JavaScript, React.JS and Linux</h2>
                                  </div>
                              </div>
                              <div class="section-language">
                                  <h1 class="section-title">LANGUAGES</h1>
                                  <div class="section-subtitles">
                                      <h2 class="subtitle-language">Belorussian <span>Native</span></h2>
                                  </div>

                                  <div class="section-subtitles">
                                      <h2 class="subtitle-language">Russian <span>Native</span></h2>
                                  </div>

                                  <div class="section-subtitles">
                                      <h2 class="subtitle-language">English <span>Pre-Intermediate</span></h2>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>

          </div>
          
          <swiper-container class="mySwiper" pagination="true" pagination-dynamic-bullets="true">
              <swiper-slide><img src={landing} alt=""/></swiper-slide>
              <swiper-slide><img src={mems} alt=""/></swiper-slide>
              <swiper-slide><img src={portfolio} alt=""/></swiper-slide>
              <swiper-slide><img src={restouran} alt=""/></swiper-slide>
            </swiper-container>

      </main>

      <footer>
          <div class="container">
              <h1 class="footer-text">© 2024 LEX DAY</h1>
          </div>
      </footer>


        </div>
    </div>
  );

}

export default App;
