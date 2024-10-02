export class Player {
  constructor(player_name, player_symbol) {
    this.player_name = player_name;
    this.player_symbol = player_symbol;
  }

  getPlayerName() {
    return this.player_name;
  }

  getPlayerSymbol() {
    return this.player_symbol;
  }
}
