import state from "./state";

export default {
  changeGame(ctx, game) {
    state.game = game;
    try {
      localStorage.game= game
    } catch (e) {}
  }
}
