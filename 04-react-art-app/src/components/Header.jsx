import logo from '../assets/logo.png';
// This builds your CSS and makes it "scoped" to the component file that import them.
//  If you simply use paragraph className in another file you won't be using this Header.module's paragraph styling
import classes from "./Header.module.css"

const paragraphStyle = {
  color: "red",
  textAlign: "left",
}

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/*
      // inline styling with javascript objects
      <p style={paragraphStyle}>A community of artists and art-lovers.</p> */
      }
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
