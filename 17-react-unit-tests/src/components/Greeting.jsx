import { useState } from "react"
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }

  return <div>
    <h2>Hello World!</h2>
    {!changedText && <Output>It's good to see you!</Output>}
    {changedText && <Output>This is being tested</Output>}
    <button onClick={changeTextHandler}>Change text!</button>
  </div>
}