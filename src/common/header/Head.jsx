import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';

const Head = () => {
    return (
        <>
            <div className='header'>
                <div className='area'>                   
                    <h2>
                        <a href='/'>BarunsonMcard</a>
                        <div className='icon'>
                            <i className="fa-sm fa-solid fa-circle-chevron-down"></i>
                        </div>
                    </h2>
                    
                    

                    <div className='nav_menu'>
                        <ul>
                            <li>
                                <Link to = './An invite'>청첩장</Link>
                            </li>
                            <li>
                                <Link to = './Thanks'>감사장</Link>
                            </li>
                            <li>
                                <Link to = './Event'>이벤트</Link>
                            </li>
                            <li>
                                <Link to = './Brand'>청첩장 브랜드</Link>
                            </li>
                            <li>
                                <Link to = './Set'>세트청첩장</Link>
                            </li>
                            <li>
                                <Link to = './Girfts'>답례품</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='toggle_menu'>
                        <i className="fa-2xl fa-regular fa-user"></i>
                        <i className="fa-2xl fa-sharp fa-regular fa-heart"></i>    
                        <i className="fa-2xl fa-solid fa-bars"></i>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Head;

// Head 로고도 해결해야하고 , 너무 어려움