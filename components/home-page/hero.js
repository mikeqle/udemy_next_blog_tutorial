import Image from "next/image";
import classes from './hero.module.css';

function Hero () {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/mike.png" alt="An image of Mike" width={300} height={300} />
      </div>
      <h1>Hi, I&apos;m Mike</h1>
      <p>
        I blog about things I&apos;m doing, especially finance, data, and web technologies
      </p>
    </section>
  )
}

export default Hero;