import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='b_line'>
                    <p>Barunson<strong>Mcard</strong></p>
                    <ul>
                        <li>
                            <Link to= '/Service'>서비스소개</Link>
                        </li>
                        <li>
                            <Link to= '/Claim'>고객센터</Link>
                        </li>
                        <li>
                            <Link to= '/Terms of use'>이용약관</Link>
                        </li>
                        <li>
                            <Link to= '/Privacy'><strong>개인정보처리방침</strong></Link>
                        </li>
                        
                    </ul>
                </div>

                <div className='b_adress'>
                    <div className='b_area'>
                        <div className='b_li'>
                            <p id='adress'>
                                (주)바른컴퍼니 대표이사 : 박정식
                                <br />
                                본사 : 경기도 파주시 회동길 219 | 서울사옥 : 서울 서초구 서운로 142-4
                                <br />
                                문의전화 : 1644-0708 | 팩스 : 02-2275-3108 | 개인정보관리책임자 : 원덕규
                                <br />
                                통신판매업신고번호 : 2007-00940 | 사업자등록번호 : 221-81-03108
                                <br />
                                Copyright ⓒ barunsoncard all rights reserved  
                            </p>
                        </div>
                        <div className='b-btn'>
                            <slelct>
                                <option value>Fmail Site</option>
                                <option value="https://www.barunsoncard.com/">바른손카드</option>
                                <option value="https://www.premierpaper.co.kr/">프리미어페이퍼</option>
                                <option value="https://www.thecard.co.kr/">더카드</option>
                                <option value="https://deardeer.kr/">디얼디어</option>
                                <option value="https://barunsonbiz.com/">바른손비즈</option>
                            </slelct>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;