export interface GameboardInterface {
    id: string;
    P1: boolean;
    P2: boolean;
    CurrentTurn: string;
    Game: Array<string>[9];
    Winner: string;
  }