import "./hero.css";
import bannerPng from "../../assets/images/banner.png";
import bannerPng2 from "../../assets/images/banner@2x.png";
import bannerWebp from "../../assets/images/banner.webp";
import bannerWebp2 from "../../assets/images/banner@2x.webp";

const Hero = () => {
    return (
        <section className="block block--dark block--skewed--left">
            <div className="container grid grid--1x2">
                <header className="block__header hero__content">
                    <h1 className="block__heading">Business Website & Software Development</h1>
                    <p className="hero__tagline">Consultancy for small business</p>
                    <div class="hero__btn">
                    <a href="#" className="btn btn--stretched btn--accent">Get In Touch</a>
                    <a href="#" className="btn btn--white hero__second-btn">See our Work</a>
                    </div>

                </header>
                <picture>
                    <source type="image/webp" srcSet={`${bannerWebp} 1x, ${bannerWebp2} 2x`} />
                    <source type="image/png" srcSet={`${bannerPng} 1x, ${bannerPng2} 2x`} />
                    <img className="hero__image" src={bannerPng} alt="Business Banner" />
                </picture>
            </div>
        </section>
    );
};

export default Hero;
