function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      alltimeUsers: [],
      recentUsers: [],
      show: 'alltime' });_defineProperty(this, "toggleView",














    evt => {
      this.setState({
        show: evt.target.id });

    });}componentDidMount() {fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(data => data.json()).then(data => this.setState({ alltimeUsers: data })).catch(error => console.log(error));fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(data => data.json()).then(data => this.setState({ recentUsers: data })).catch(error => console.log(error));}

  render() {
    const sortedUsers = this.state.show === 'recent' ? this.state.recentUsers.sort((a, b) => b.recent - a.recent) : this.state.alltimeUsers.sort((a, b) => b.alltime - a.alltime);
    const usernames = sortedUsers.map((user, idx) => /*#__PURE__*/
    React.createElement("div", { className: "user", key: idx }, /*#__PURE__*/
    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("img", { src: user.img, alt: "" }), /*#__PURE__*/
    React.createElement("div", { className: "username" }, user.username)), /*#__PURE__*/


    React.createElement("div", { className: this.state.show !== 'recent' ? 'green' : null }, user.recent), /*#__PURE__*/
    React.createElement("div", { className: this.state.show !== 'alltime' ? 'green' : null }, user.alltime)));


    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h2", null, "Camper Leader Board"), /*#__PURE__*/
      React.createElement("div", { className: "user header" }, /*#__PURE__*/
      React.createElement("div", null, "User"), /*#__PURE__*/
      React.createElement("div", { className: `sort-button ${this.state.show !== 'recent' ? 'green-bg' : null}`, id: "alltime", onClick: this.toggleView }, "All Time"), /*#__PURE__*/
      React.createElement("div", { className: `sort-button ${this.state.show !== 'alltime' ? 'green-bg' : null}`, id: "recent", onClick: this.toggleView }, "Recent")),

      usernames));




  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));