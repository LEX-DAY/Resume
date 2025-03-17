import { ReactComponent as Vector } from './img/icons/Vector.svg';
import { ReactComponent as Vector1 } from './img/icons/Vector-3.svg';
import { ReactComponent as Vector2 } from './img/icons/Vector-1.svg';
import vector3 from './img/me.jpg';
import landing from './img/slider/landing.jpg';
import mems from './img/slider/mems.jpg';
import portfolio from './img/slider/portfolio.jpg';
import restouran from './img/slider/restouran.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <div className="container">
            <div className="header-left">
              <div className="header-titles">
                <h1 className="header-title">
                  ALIAKSEI DZIATSEL
                </h1>
                <h1 className="header-title-prof">
                  Software engineer
                </h1>
                
              </div>

              <div className="titles-contacts">
                <ul>
                  <li>
                    <a href="https://github.com/LEX-DAY">
                      <Vector />
                      <p className="contact">https://github.com/LEX-DAY</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/lex-day">
                      <Vector1 />
                      <p className="contact">ALIAKSEI DZIATSEL</p>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:lesha.dyatel@gmail.com" type="email">
                      <Vector2 />
                      <p className="contact">lesha.dyatel@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="header-right">
              <img src={vector3} alt="Profile" className="header-img" />
              <div className="img-titles">
                <h1 className="img-title">ABOUT ME</h1>
                <p className="img-subtitle">
                A software engineer with many years of experience. I specialize in software development, process automation, and working with Python, SQL (PostgreSQL), Telegram API, and Web development. I have experience writing PowerShell scripts for remote administration. I can optimize queries in databases, develop bots and automated systems. I am distinguished by my analytical thinking, attention to detail, and ability to solve non-standard tasks.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="main-content">
              <div className="main-left">
                <div className="main-section">
                  <div className="section-titles">
                    <div className="titles">
                      <h1 className="section-title">EDUCATION</h1>
                      <div className="section-subtitles">
                        <h2 className="subtitle-year">2016-2020</h2>
                        <div className="subtitle-name">
                          <h2>Belarusian State University</h2>
                          <p className="subtitle-text">Physical, New materials and Technologies</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section-titles">
                    <div className="titles">
                      <h1 className="section-title">EXPERIENCE</h1>
                      <div className="section-subtitles">
                        <h2 className="subtitle-year">2024-Now</h2>
                        <div className="subtitle-name">
                          <h2>DEFO-Furniture LLC</h2>
                          <p className="subtitle-text">Software Engineer</p>
                        </div>
                      </div>
                      <div className="section-subtitles">
                        <h2 className="subtitle-year">2024-2024</h2>
                        <div className="subtitle-name">
                          <h2>INTELLIGENT TECHNOLOGIES</h2>
                          <p className="subtitle-text">Frontend Developer</p>
                        </div>
                      </div>
                      <div className="section-subtitles">
                        <h2 className="subtitle-year">2021-2022</h2>
                        <div className="subtitle-name">
                          <h2>BelCrystalService</h2>
                          <p className="subtitle-text">Implementation Engineer. Project implementation and testing of new hardware and software</p>
                        </div>
                      </div>
                      <div className="section-subtitles">
                        <h2 className="subtitle-year">2019-2021</h2>
                        <div className="subtitle-name">
                          <h2>Institute of Physics NAS of Belarus</h2>
                          <p className="subtitle-text">Engineer. Research, scientific, academic activities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-right">
                <div className="main-section">
                  <div className="section-titles">
                    <div className="section-skills">
                      <h1 className="section-title">SKILLS</h1>
                      <div className="skill-subtitles">
                        <h2 className="subtitle-skill"><span>HTML</span>, <span>CSS</span>, <span>PostgreSQL</span>, NodeJS, <span>JavaScript</span>, <span>React.JS</span>, <span>Python</span>, OpenCV, <span>PowerShell</span>, Active Directory, and Linux</h2>
                      </div>
                    </div>
                    <div className="section-language">
                      <h1 className="section-title">LANGUAGES</h1>
                      <div className="section-subtitles">
                        <h2 className="subtitle-language">• Belorussian <span>Native</span></h2>
                      </div>
                      <div className="section-subtitles">
                        <h2 className="subtitle-language">• Russian <span>Native</span></h2>
                      </div>
                      <div className="section-subtitles">
                        <h2 className="subtitle-language">• English <span>Pre-Intermediate</span></h2>
                      </div>
                      <div className="section-subtitles">
                        <h2 className="subtitle-language">• Chinese <span>Beginner</span></h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <swiper-container className="mySwiper" pagination="true" pagination-dynamic-bullets="true">
            <swiper-slide><img src={landing} alt="Landing" /></swiper-slide>
            <swiper-slide><img src={mems} alt="Mems" /></swiper-slide>
            <swiper-slide><img src={portfolio} alt="Portfolio" /></swiper-slide>
            <swiper-slide><img src={restouran} alt="Restaurant" /></swiper-slide>
          </swiper-container>
        </main>

        <footer>
          <div className="container">
            <h1 className="footer-text"> 2025 LEX DAY</h1>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
