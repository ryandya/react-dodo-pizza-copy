import './header.css'
import Logo from '../images/logo.svg'
import star from '../images/star.svg'
import dodocoin from '../images/Dodocoin.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className="wrapper">
                <div className="container">
                    <div className="menu">
                        <ul className="menu_list">
                            <li className="menu_item">
                                <a href="#" className="menu_item red_dot">
                                    Прямой эфир
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="#" className="menu_item">
                                    Работа в додо
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="#" className="menu_item">
                                    О нас
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="#" className="menu_item">
                                    Контактыы
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="#" className="menu_item">
                                    Корпоративные заказы
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="#" className="menu_item">
                                    Подарочные сертификаты
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className='inner'>
                        <div className="left">
                            <div className="header_logo">
                                <div className="header_logo">
                                    <a href="#" className="logo">
                                        <img src={Logo} alt="Image not found" />
                                    </a>
                                </div>
                                <div className="logo_text">
                                    <span>Сеть №1 в России</span>
                                    <a href="" className="logo_link">по количеству пиццерий</a>
                                </div>
                            </div>
                            <div className="header__city">
                                <div className="header__about">
                                    <span className="header__about_text">Доставка пиццы</span>
                                    <button type="button" className='header__about_location'>Новосибирск</button>
                                </div>
                                <div className="header__info">
                                    <span>34 мин</span>
                                    <div className="header__info_item"><i className="item_black_dot"></i></div>
                                    <span>4.37</span>
                                    <img className='star' src={star} alt="Image not found" />
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <a href="#" className="loyal_program">
                                <img src={dodocoin} alt="Img" />
                                <span>Додокоины</span>
                            </a>
                            <button type="button" className='login_btn'>Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
