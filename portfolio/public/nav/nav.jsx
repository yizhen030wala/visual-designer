// import React, { useState, useEffect } from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; //物件內用到連結跳轉就需要放
import './nav.scss'
import Logo from '../../src/assets/images/navLogo.png'
import Menu from '../../src/assets/icon/menu.svg'
// import UnLogin from '../ShowUnlogin/ShowUnlogin.jsx'


function Header() {
    const [position, setPosition] = useState(window.scrollY)
    // console.log(`position:${position}`);
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY;
            // console.log(`moving:${moving}`);

            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? "visible" : "hidden";


    return (
        <div className={cls}>
            <div className="header">
                {/* LOGO  */}
                <div className='logo'>
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                {/* 置頂導覽按鈕  */}
                <nav>
                    <ul className="nav_btn">
                        <li className='btn_link'><Link to="/">Works</Link></li>
                        <li className='btn_link'><Link to="/">About me</Link></li>
                        <li className='btn_link'><Link to="/">下載履歷</Link></li>
                    </ul>
                </nav>
                {/* nenu  */}
                <div className="user">
                    <figure className="menu_box">
                        <img src={Menu} alt="" />
                    </figure>
                </div>
                <div className="popup-content">
                    {/* <UnLogin /> */}

                </div>

            </div>

        </div>
  )
}

export default Header
