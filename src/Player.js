export class Player {
  constructor(player_name, player_symbol) {
    this.player_name = player_name;
    this.player_symbol = player_symbol;
  }

  getName() {
    return this.player_name;
  }

  getSymbol() {
    return this.player_symbol;
  }
}
