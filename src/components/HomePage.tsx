import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import '../styles/style.css'
import logoImage from '../images/logo-partners.png'; 
import laptopImage from '../images/laptop.png';
import smartPhoneImage from '../images/smartphone.png';
import cameraImage from '../images/camera.png';
import printerImage from '../images/fax.png';
import usbImage from '../images/usb-c-cable.png';
import processingImage from '../images/processing.png';
import tvImage from '../images/television.png';
import moonLogo from '../images/half-moon.png';
import sunLogo from '../images/contrast.png';
import consultPng from '../images/consultant.png'
import navigationJpg from '../images/navigation.jpg'
import interier from '../images/interier-partners.jpg'
import heartPng from '../images/heart.png'
import servicesPng from '../images/vehicle.png'
import backetPng from '../images/shopping-online.png'

export function HomePage() {
  // Инициализируем состояние для текущей темы
  const [initTheme, setInitTheme] = useState(localStorage.getItem('theme') || 'whiteTheme');
  const [logo, setLogo] = useState(initTheme === 'whiteTheme')

  const [isOpen, setIsOpen] = useState(false);

 
  // Для отображения тёмной/светлой темы
  const addThemeClassBgBody = initTheme
  const addNameTheme = initTheme === 'whiteTheme' ? 'Темная тема' : 'Светлая тема'

   // Обработчик смены темы
   const toggleTheme = () => {
     setLogo(!logo)
     const newTheme = initTheme === 'whiteTheme' ? 'darkTheme' : 'whiteTheme';
     setInitTheme(newTheme);
     localStorage.setItem('theme', newTheme); // Сохраняем тему в localStorage
     setLogo(newTheme === 'darkTheme')
    }

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        setInitTheme(savedTheme);
        setLogo(savedTheme === 'darkTheme')
      }
    }, []);

    const logoImg = logo ? sunLogo : moonLogo

    return ( 
        <div className={addThemeClassBgBody}>
          
      <header>

        <div className="flex-head">

          <div className="navbar-btn">
          <div className="hamburger-button-container">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={50}
              height={35}
              strokeWidth={1}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
        </div>
        </div>

        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
          <button className="close-button" onClick={() => setIsOpen(false)}>
          ×
           </button>

            <button className="btn-regist-Changed"><p>Регистрация</p></button>
            <div className='changeTh-btn-nav'>
              <img className='logoTh-Changed' src={logoImg} alt="logoTh" width='20'/> 
              <button id="changeTheme-button-Changed" onClick={toggleTheme}>{addNameTheme}</button>
            </div>

            <a href="google.com" className='flex-nav-png'>
              <img src={backetPng} alt="heart" width='25' />
              <p className='btnHamburg'>Корзина</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <img src={heartPng} alt="heart" width='25' />
              <p className='btnHamburg'>Избранное</p>
            </a>

            <a href="google.com" className='flex-nav-png'>
              <img src={servicesPng} alt="heart" width='25' />
              <p className='btnHamburg'>Услуги</p>
            </a>

            <a href="google.com">
              <p className='btnHamburg'>Каталог</p>
            </a>

            <a href="google.com">
              <p className='btnHamburg'>Доставка и оплата</p>
            </a>

            <a href="google.com">
              <p className='btnHamburg'>О нас</p>
            </a>

            <a href="google.com">
              <p className='btnHamburg'>Контакты</p>
            </a>

            

            

          </ul>
      </div>
          <a href="#">
            <img src={logoImage} alt="logo" width="100" className='logo' />
          </a>
          <button className="btn-nav"><p className='btn-text-nav'>Доставка и оплата</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>О нас</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Контакты</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Каталог</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Услуги</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Корзина</p></button>
          <button className="btn-nav"><p className='btn-text-nav'>Избранное</p></button>

          <img className='logoTh' src={logoImg} alt="logoTh" /> 
          <button id="changeTheme-button" onClick={toggleTheme}>{addNameTheme}</button>

          <button className="btn-regist"><p>Регистрация</p></button>  
        </div>
      </header>

      <section className='bodyContent'>
        <div className="catalog-flex">
          <div className='catalog'>
            <h3 className='h3-catalog'>Каталог</h3>

            <button className="btn-catalog">
              <img src={laptopImage} alt="laptopImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Компьютеры и комплектующие</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img src={smartPhoneImage} alt="smartPhoneImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Смартфоны, планшеты</p>
            </button>
            <br />

            <button className="btn-catalog">
              <img src={tvImage} alt="tvImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Телевизоры, видео-техника</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={cameraImage} alt="cameraImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Цифровое фото и видео</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={usbImage} alt="usbImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Сетевое оборудование</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={processingImage} alt="processingImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Расходные материалы</p>
              </button>
            <br />

            <button className="btn-catalog">
              <img src={printerImage} alt="printerImage" width='30' className='logo-catalog' />
              <p className="btn-catalog-txt">Офисная техника</p>
              </button>
            </div>

            <img src={logoImage} alt="logo" width='150' className='logo-2' />
            <p className="describe">Магазин электронной техники <span className="partners">Partner's</span> в Костанае – ваш надежный партнер для широкого ассортимента электронной техники и инновационных устройств. </p>
            <img src={interier} alt="int" width="370" className='interier' />
          </div>

          <section className="bodyContent-part2">
            <div className='brown-block'>
              <div className="describeForm">
                <h3 className='h3-consult'>Нужна консультация по выбору техники?</h3>
                <p className='h3-consult'>Есть вопрос? Задайте его в форме ниже:</p>
              </div>
                <div className="formConsult">
                
                <img src={consultPng} alt="consult" width='800' className='consultantImg'/>
                <div className='inputsForm'>
                  <input type="text" placeholder='Ваше имя*' id='firstInput'/>
                  <input type="text" placeholder='+7- - - - - - - -*'/>
                  <input type="text" placeholder='Ваш вопрос*'/>
                  <button className="btn-send">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                </div>
              </div>

                <div className="title">
                  <h3 id='h3-mag-elec'>Магазин электронной техники <span className="partners-2">Partner's</span></h3>
                  <p className='parag-navig'>рядом с вами, в Костанае</p>
                <div className="navig-jpg">
                    <img src={navigationJpg} alt="navigation" className='image-navigation' />
                </div>
                </div>
              </div>
          </section>
          <footer>
          © Все права защищены (2023)
        </footer>
        </section>
        
      

    </div>
    )
}