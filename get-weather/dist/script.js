function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      weatherData: null,
      latitude: 'none',
      longitude: 'none',
      mode: 'fahrenheit',
      _isLoading: false });_defineProperty(this, "getWeather",


    () => {
      this.setState({ _isLoading: true });
      navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        this.setState({ latitude: lat, longitude: long, _isLoading: false });
        fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`).
        then(response => response.json()).
        then(data => {this.setState({ weatherData: data });});
      },
      err => console.log(err.code));
    });_defineProperty(this, "changeToC",

    () => {this.setState({ mode: 'celsius' });});_defineProperty(this, "changeToF",
    () => {this.setState({ mode: 'fahrenheit' });});}

  render() {
    const weatherData = this.state.weatherData;
    const isC = this.state.mode === 'celsius';
    return /*#__PURE__*/(
      React.createElement("div", { className: "element-main" }, /*#__PURE__*/
      React.createElement("h2", null, "Local Weather ", /*#__PURE__*/React.createElement("i", { className: "sun icon" })), /*#__PURE__*/

      React.createElement("div", { className: "ui hidden divider" }), /*#__PURE__*/
      React.createElement("button", { className: `ui right labeled icon button large ${this.state._isLoading && 'disabled'}`, onClick: this.getWeather }, "Get Local Weather ", /*#__PURE__*/
      React.createElement("i", { className: "angle right icon" })), /*#__PURE__*/


      React.createElement("div", { className: "ui hidden divider" }),

      this.state._isLoading && /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "ui basic label" }, /*#__PURE__*/React.createElement("i", { className: "point icon" }), "Requires browser location to be enabled"), /*#__PURE__*/
      React.createElement("div", { className: "ui hidden divider" }), /*#__PURE__*/
      React.createElement("div", { className: "ui active inline loader" })),



      weatherData && !this.state._isLoading && /*#__PURE__*/
      React.createElement("div", { className: "ui segment" }, /*#__PURE__*/
      React.createElement("h3", null, weatherData.name), /*#__PURE__*/
      React.createElement("h3", null, !isC ? weatherData.main.temp * 9 / 5 + 32 : weatherData.main.temp, '°  and  ', weatherData.weather[0].main), /*#__PURE__*/
      React.createElement("div", { className: "ui basic buttons" }, /*#__PURE__*/
      React.createElement("div", { className: `ui button compact ${!isC && 'active'}`, onClick: this.changeToF }, "\xB0F"), /*#__PURE__*/
      React.createElement("div", { className: `ui button compact ${isC && 'active'}`, onClick: this.changeToC }, "\xB0C")), /*#__PURE__*/

      React.createElement("h3", null, "Location:"), /*#__PURE__*/
      React.createElement("p", null, this.state.longitude, ", ", this.state.latitude))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));