class Game {
  constuctor(stacks = [[3,2,1],[],[]]) {
    this.stacks = stacks;
  }

  promptMove() {
    console.log(this.stacks);
    console.log("What tower do you want to move from and to? (0, 1 or 2, 1 etc.) >");
    let newMove = global.stdin.readline();
    this.parseMove(newMove);
  }

  parseMove(string) {
    let newArr = [string.slice(1), string.slice(string.length - 1)];
    return newArr;
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    
  }
}
