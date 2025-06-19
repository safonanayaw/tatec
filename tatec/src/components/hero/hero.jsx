import "./hero.css";

const Hero = () => {
    return (
        <section className="block block--dark block--skewed--left">
            <div className="container grid grid--1x2">
                <header className="block__header hero__content">
                <h1 className="block__heading">Business Website & Software Development</h1>
                <p className="hero__tagline">Consultancy for small business</p>
                <a href="" class="btn btn--stretched btn--accent">Get Started</a>
                </header>
            </div>
        </section>
    )
}

export default Hero;