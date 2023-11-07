import "./About.css";
import photo from "../../Assets/aboutPhoto.png";

function About() {
  return (
    <div className="about__wrap">
      <div className="photo__wrap">
        <img src={photo} alt="Memoji" />
      </div>
      <div className="text__wrap">
        <h2>So, who am I?</h2>
        <div className="about__cont">
          <p>
            My name is Maciej Kłoda. I'm a Front-End Web Developer working in
            React JS.I'm a student of computer science, but I devote my free time
            to my passions. I associate programming with my future. An important
            part of my life is sport and motorsport. I've been learing about web
            development for 4 years, starting with HTML, CSS, JS and now learing
            REACT JS. I want to became full stack developer. I am person who likes challenges, finding solutions to problems, work with people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
