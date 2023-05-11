import React from 'react'
import '../Styles/footer_ui.css';
import IonIcon from '@reacticons/ionicons';

const FooterWeb = () => {
    return (
        <>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <ul class="social-icon">
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <IonIcon name="logo-facebook" ></IonIcon>
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <IonIcon name="logo-twitter" ></IonIcon>
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <IonIcon name="logo-linkedin" ></IonIcon>
                    </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <IonIcon name="logo-instagram" ></IonIcon>
                    </a></li>
                </ul>
                <ul class="menu">
                    <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">About</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                    <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

                </ul>
                <p>&copy;2023 AgroGuru | All Rights Reserved</p>
            </footer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </>
    )
}

export default FooterWeb