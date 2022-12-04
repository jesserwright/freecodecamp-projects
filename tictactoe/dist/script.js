function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      board: ['', '', '', '', '', '', '', '', ''],
      player: '',
      weHaveWinner: false,
      gameIsRunning: false });_defineProperty(this, "symbolPick",


    evt => {
      this.setState({
        player: evt.target.id,
        gameIsRunning: true });

    });_defineProperty(this, "resetGame",

    () => {
      this.setState({
        board: ['', '', '', '', '', '', '', '', ''],
        player: '',
        weHaveWinner: false,
        gameIsRunning: false });

    });_defineProperty(this, "handlePlaceMove",

    evt => {
      const id = evt.target.getAttribute('value');

      const board = this.state.board;
      const solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      const currentSymbol = this.state.player;

      const isOccupied = board[id].length < 1;
      const newBoard = board.map((val, idx) =>
      // eslint-disable-next-line
      idx == id && isOccupied ? val = currentSymbol : val);


      const checkWin = solutions.map((solution) =>
      newBoard[solution[0]] === 'X' &&
      newBoard[solution[1]] === 'X' &&
      newBoard[solution[2]] === 'X' ||

      newBoard[solution[0]] === 'O' &&
      newBoard[solution[1]] === 'O' &&
      newBoard[solution[2]] === 'O' ?
      'win' : 'loose');
      const isWin = checkWin.filter(result => result === 'win').length > 0 && true;
      if (this.state.gameIsRunning) {
        this.setState({
          board: newBoard,
          player: isOccupied ? currentSymbol === "X" ? 'O' : "X" : currentSymbol,
          weHaveWinner: isWin });

      }

    });}

  render() {
    const isWinner = this.state.weHaveWinner;
    const boardNow = this.state.board;
    const playerNow = this.state.player;
    const noWinner = boardNow.join('').length === 9;

    const renderedBoard = this.state.board.map((val, idx) => /*#__PURE__*/
    React.createElement("div", {
      onClick: this.handlePlaceMove,
      key: idx,
      value: idx },

    val));



    return /*#__PURE__*/(
      React.createElement("div", { className: "element-main" }, /*#__PURE__*/
      React.createElement("h2", null, "Tic Tac Toe ", /*#__PURE__*/React.createElement("i", { className: "hashtag icon" })), /*#__PURE__*/
      React.createElement("div", { className: "ui segment" }, /*#__PURE__*/
      React.createElement("h2", null,

      isWinner && (playerNow === "X" ? 'Player O Won!' : "Player X Won!"),



      noWinner && !isWinner && "It's a draw!",


      !isWinner && !noWinner && this.state.gameIsRunning && `Player ${playerNow}'s Turn`,


      !this.state.gameIsRunning && /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", null, "Pick Symbol"), /*#__PURE__*/
      React.createElement("div", { className: "ui divider" }), /*#__PURE__*/
      React.createElement("button", { className: "ui button large", id: 'X', onClick: this.symbolPick }, "X"), /*#__PURE__*/
      React.createElement("button", { className: "ui button large", id: 'O', onClick: this.symbolPick }, "O"))),






      (noWinner || isWinner) && /*#__PURE__*/React.createElement("div", { onClick: this.resetGame, className: "green ui button" }, "Play Again")), /*#__PURE__*/




      React.createElement("div", { className: "grid" },
      renderedBoard)));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));