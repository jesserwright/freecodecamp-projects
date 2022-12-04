function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      bibleVerse: null,
      bibleRef: null });_defineProperty(this, "getVerse",


    () => {
      const randomQueryNum = 19001000 + Math.floor(Math.random() * 9) * 10000;
      const randomQuery = `${randomQueryNum}-${randomQueryNum + 5}`;
      fetch(`https://api.esv.org/v3/passage/text/?q=${randomQuery}&include-passage-references=false&include-first-verse-numbers=false&include-verse-numbers=false&include-footnotes=false
`, {
        headers: {
          'Authorization': 'Token b96c215fb2619d00512c3c1766d7be45e0a7f740' } }).


      then(response => response.json()).
      then(data => this.setState({ bibleVerse: data.passages, bibleRef: data.canonical }));
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "element-main" }, /*#__PURE__*/

      React.createElement("h2", null, "Random Bible Verse ", /*#__PURE__*/React.createElement("i", { className: "book icon" })), /*#__PURE__*/

      React.createElement("button", { className: `ui right labeled icon button large`, onClick: this.getVerse }, "Generate", /*#__PURE__*/
      React.createElement("i", { className: "angle right icon" })),


      !!this.state.bibleVerse && /*#__PURE__*/
      React.createElement("div", { className: "ui segment" }, /*#__PURE__*/
      React.createElement("p", null, this.state.bibleVerse), /*#__PURE__*/
      React.createElement("h3", null, this.state.bibleRef))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));