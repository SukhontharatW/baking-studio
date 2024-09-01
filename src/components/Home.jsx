import About from "./About";
import Class from "./Class";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Value from "./Value";

function Home() {
  return (
    <>
      <div className="container">
        <div className="container__main">
          <Hero />
        </div>
      </div>
      <div className="container">
        <div className="container__middle">
          <Value />
        </div>
      </div>
      <div className="container">
        <div className="container__main bg__grey-2">
          <About />
        </div>
      </div>
      <div className="container">
        <div className="container__main">
          <Class />
        </div>
      </div>
      <div className="container">
        <div className="container__main">
          <Testimonial />
        </div>
      </div>
    </>
  );
}

export default Home;
