import React from 'react';
import "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className='footerCont'>
                <ul className="footer-column">
                    <li className="footer-title">Teknolojik</li>
                    <li className="footer-title1">Yemekler</li>
                    <li className="footer-title" ><img src=".\Assets\mile2-aseets\footer\icons\icon-1.png" alt="location" /><span className="footer-info">341 Londonderry Road, Istanbul Türkiye</span></li>
                    <li className="footer-title"><img src=".\Assets\mile2-aseets\footer\icons\icon-2.png" alt="email" /><span className="footer-info">aciktim@teknolojikyemekler.com</span></li>
                    <li className="footer-title"><img src=".\Assets\mile2-aseets\footer\icons\icon-3.png" alt="phone" /><span className="footer-info">+90 216 123 45 67</span></li>
                </ul>
                <div className="footer-column">
                    <ul className="footer-menu">
                        <li className="footer-subtitle">Hot Menu</li>
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathlon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Testler Geçti Mutlu Burger</li>
                        <li>Position Absolute Acı Burger</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <div className="footer-subtitle">Instagram</div>
                    <div className="footer-instagram">
                        <img src=".\Assets\mile2-aseets\footer\insta\li-0.png" alt="insta-1" />
                        <img src=".\Assets\mile2-aseets\footer\insta\li-1.png" alt="insta-2" />
                        <img src=".\Assets\mile2-aseets\footer\insta\li-2.png" alt="insta-3" />
                        <img src=".\Assets\mile2-aseets\footer\insta\li-3.png" alt="insta-4" />
                        <img src=".\Assets\mile2-aseets\footer\insta\li-4.png" alt="insta-5" />
                        <img src=".\Assets\mile2-aseets\footer\insta\li-5.png" alt="insta-6" />
                    </div>
                </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-bottom">
                <span className="footer-copy">© 2023 Teknolojik Yemekler.</span>
            </div>
        </footer>
    );
}

export default Footer;
