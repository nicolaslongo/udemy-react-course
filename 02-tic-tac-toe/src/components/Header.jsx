// Header was supposed to be in index.html, since we do not need it to be rebuilt every time.
// but this did not work for this project
export default function Header() {
  return (
    <header>
      <img src="game-logo.png" alt="Hand-drawn tic-tac-toe game board"/>
      <h1>Tic-Tac-Toe </h1>
    </header>
  )
}