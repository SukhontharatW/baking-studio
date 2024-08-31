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
        <div className="container__mid">
          <Value />
        </div>
      </div>
    </>
  );
}

export default Home;
