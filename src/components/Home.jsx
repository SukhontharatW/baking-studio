import About from "./About";
import Action from "./Action";
import Class from "./Class";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Value from "./Value";

function Home() {
  return (
    <>
      <div className="container hero__bg">
        <div className="container__main">
          <Hero />
        </div>
      </div>
      <div className="container">
        <div className="container__main">
          <Value />
        </div>
      </div>
      <div className="container">
        <div className="container__main bg__grey-2">
          <About />
        </div>
      </div>
      <div className="container bg__grey-3">
        <div className="container__main bg__grey-3">
          <Class />
        </div>
      </div>
      <div className="container">
        <div className="container__main">
          <Testimonial />
        </div>
      </div>
      <div className="container">
        <div className="container__main">
          <Action />
        </div>
      </div>
    </>
  );
}

export default Home;
