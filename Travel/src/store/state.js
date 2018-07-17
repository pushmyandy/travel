let defaultGame = "GO"
try {
  if(localStorage.game) {
    defaultGame = localStorage.game;
  }
}catch (e) {

}

export default  {
  game: defaultGame
}
