function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      wikiData: [] });_defineProperty(this, "handleQuery",


    evt => {
      const queryNow = evt.target.value;
      fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${queryNow}&format=json`).
      then(data => data.json()).
      then(data => this.setState({ wikiData: data }));
    });_defineProperty(this, "handleSubmit",

    evt => {

    });}

  render() {
    const isData = this.state.wikiData.length > 0;

    const renderedTitles = isData &&
    this.state.wikiData[1].map((val, idx) => /*#__PURE__*/
    React.createElement("h4", { key: val }, val, " ", /*#__PURE__*/React.createElement("i", { className: "chevron right icon" })));

    const renderedParagraphs = isData &&
    this.state.wikiData[2].map((val, idx) => /*#__PURE__*/
    React.createElement("p", { key: val }, val.slice(0, 100), "..."));


    const renderedWikiData = isData &&
    this.state.wikiData[3].map((val, idx) => /*#__PURE__*/

    React.createElement("div", { className: "ui left aligned segment", key: `${idx}-result` }, /*#__PURE__*/
    React.createElement("a", { key: val, href: val },
    renderedTitles[idx],
    renderedParagraphs[idx])));





    return /*#__PURE__*/(
      React.createElement("div", { className: "element-main" }, /*#__PURE__*/
      React.createElement("h2", null, "Wikipedia Search ", /*#__PURE__*/React.createElement("i", { className: "search icon" })), /*#__PURE__*/

      React.createElement("div", { className: "ui icon input small" }, /*#__PURE__*/
      React.createElement("input", { onChange: this.handleQuery, className: "prompt", type: "text", placeholder: "Search..." }), /*#__PURE__*/

      React.createElement("i", { className: "search icon" })), /*#__PURE__*/


      React.createElement("div", { className: "ui divider hidden" }),


      !isData && /*#__PURE__*/
      React.createElement("button", { className: "ui basic right labeled icon button tiny" }, /*#__PURE__*/
      React.createElement("i", { className: "question icon" }), /*#__PURE__*/
      React.createElement("a", { href: "https://en.wikipedia.org/wiki/Special:Random" }, "Random Article")), /*#__PURE__*/




      React.createElement("div", { className: "" }, /*#__PURE__*/
      React.createElement("div", null, renderedWikiData))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));