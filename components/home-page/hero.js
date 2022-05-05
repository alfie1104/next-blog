import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/alfie.png"
          alt="An image showing alfie"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Alfie</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Next.
      </p>
    </section>
  );
}
export default Hero;
