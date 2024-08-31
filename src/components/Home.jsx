import About from "./About";
import Hero from "./Hero";
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
    </>
  );
}

export default Home;
