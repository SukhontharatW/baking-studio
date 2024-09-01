import aboutImg from "../image/about-img.png";
function About() {
  return (
    <div className="about">
      <div className="about__text">
        <div className="heading">
          <h3 className="heading--h3">ABOUT US</h3>
          <h2 className="heading--h2">Come visit our baking studio</h2>
        </div>
        <p className="p__reg--normal">
          At our baking studio,we offer a unique experience with a wide range of
          baking classes suitable for beginners and seasoned bakers. Whether
          you&apos;re looking to enhance your skills or start your own bakery,
          our classes cater to all.
        </p>
        <p className="p__reg--normal about__message">
          You are going to fall in love with our recipes.
        </p>
      </div>
      <div className="about__image">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
}

export default About;
