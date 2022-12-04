function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
function makeHumanReadable(ms) {
  const seconds = Math.floor(ms / 1000 % 60);
  const minutes = Math.floor(ms / 1000 / 60 % 60);
  return [minutes, seconds].
  map(val => val.toString().padStart(2, '0')).
  join(':');
}

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      workTime: 1200000,
      breakTime: 300000,
      timeRemaining: 1200000,
      runningSince: null,
      nextTimer: 'breakTime',
      currentTimer: 'workTime' });_defineProperty(this, "handleTimeChange",









    (posNeg, timeSettingType) => {
      // Add or subtract 1 min. Do not allow below 0 or over 60 mins.
      const changeTime = this.state[timeSettingType] + 60000 * posNeg;

      if (posNeg > 0) {
        if (this.state[timeSettingType] === 3600000) {
          timeSettingType === 'workTime' ?
          this.setState({ workTime: 0, timeRemaining: 0 }) :
          this.setState({ breakTime: 0 });
        } else {
          timeSettingType === 'workTime' ?
          this.setState({ workTime: changeTime, timeRemaining: changeTime }) :
          this.setState({ breakTime: changeTime });
        }

      } else if (posNeg < 0 && this.state[timeSettingType] > 0) {
        timeSettingType === 'workTime' ?
        this.setState({ workTime: changeTime, timeRemaining: changeTime }) :
        this.setState({ breakTime: changeTime });
      }

    });_defineProperty(this, "handleStart",

    () => {
      if (!!!this.state.runningSince) {
        this.setState({
          timeRemaining: this.state[this.state.currentTimer],
          runningSince: Date.now() });

      } else {
        this.setState({
          timeRemaining: this.state[this.state.nextTimer],
          runningSince: Date.now(),
          nextTimer: this.state.currentTimer,
          currentTimer: this.state.nextTimer });

      }

    });_defineProperty(this, "handleStop",

    () => {
      this.setState({
        runningSince: null,
        timeRemaining: this.state.timeRemaining - (Date.now() - this.state.runningSince) });

    });_defineProperty(this, "handleReset",

    () => {
      this.setState({
        workTime: 1200000,
        breakTime: 300000,
        timeRemaining: 1200000,
        runningSince: null,
        nextTimer: 'breakTime',
        currentTimer: 'workTime' });

    });_defineProperty(this, "handleResume",

    () => {
      this.setState({
        runningSince: Date.now() });

    });}componentDidMount() {this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);}componentWillUnmount() {clearInterval(this.forceUpdateInterval);}

  render() {

    const calculatedTime = this.state.timeRemaining - (Date.now() - this.state.runningSince);
    const currentTimerText = this.state.currentTimer === 'breakTime' ? 'Break' : 'Work';
    const nextTimerText = this.state.nextTimer === 'breakTime' ? 'Break' : 'Work';

    const timerIsDone = calculatedTime <= 0 && !!this.state.runningSince;
    const isPaused = !!!this.state.runningSince && this.state.workTime !== this.state.timeRemaining;

    return /*#__PURE__*/(

      React.createElement("div", { className: "element-main" }, /*#__PURE__*/

      React.createElement("h2", null, "Pomodoro Timer ", /*#__PURE__*/React.createElement("i", { className: "time icon" })), /*#__PURE__*/

      React.createElement("h4", { className: "ui horizontal divider header" }, "Settings"), /*#__PURE__*/



      React.createElement("div", { className: "ui segments" }, /*#__PURE__*/
      React.createElement(Settings, {
        timeChange: this.handleTimeChange,
        sessionName: 'Work',
        sessionSetting: this.state.workTime,
        settingType: 'workTime',
        runningSince: this.state.runningSince,
        timeRemaining: this.state.timeRemaining,
        workTime: this.state.workTime }), /*#__PURE__*/

      React.createElement(Settings, {
        timeChange: this.handleTimeChange,
        sessionName: 'Break',
        sessionSetting: this.state.breakTime,
        settingType: 'breakTime',
        runningSince: this.state.runningSince,
        timeRemaining: this.state.timeRemaining,
        workTime: this.state.workTime })), /*#__PURE__*/



      React.createElement("h4", { className: "ui horizontal divider header" },
      timerIsDone ? nextTimerText : currentTimerText, " Time Remaining"), /*#__PURE__*/



      React.createElement("h1", null,

      !!this.state.runningSince && calculatedTime > 0 &&
      makeHumanReadable(calculatedTime),


      !!!this.state.runningSince && this.state.timeRemaining > 0 &&
      makeHumanReadable(this.state.timeRemaining),


      calculatedTime < 0 && !!this.state.runningSince &&
      makeHumanReadable(this.state[this.state.nextTimer])), /*#__PURE__*/



      React.createElement("div", { className: "ui divider" }),


      (timerIsDone || // timer is still running and is below 0 (timer is done)

      !!!this.state.runningSince && this.state.workTime === this.state.timeRemaining) && /*#__PURE__*/ // timer is not running and and in edit mode


      React.createElement("button", { className: "green ui right labeled icon basic button", onClick: this.handleStart }, "Start ",
      timerIsDone ? nextTimerText : currentTimerText, " Timer", /*#__PURE__*/React.createElement("i", { className: "play icon" })),





      !!this.state.runningSince && this.state.timeRemaining !== 0 && calculatedTime > 0 && /*#__PURE__*/ // If timer is running

      React.createElement("button", { className: "red ui right labeled icon basic button", onClick: this.handleStop }, "Pause", /*#__PURE__*/
      React.createElement("i", { className: "pause icon" })),




      isPaused // If timer is paused
      && /*#__PURE__*/

      React.createElement("div", { className: "" }, /*#__PURE__*/
      React.createElement("button", { className: "green ui right labeled icon basic button", onClick: this.handleResume }, "Resume", /*#__PURE__*/
      React.createElement("i", { className: "play icon" })), /*#__PURE__*/

      React.createElement("button", { className: "red ui right labeled icon basic button", onClick: this.handleReset }, "Reset", /*#__PURE__*/
      React.createElement("i", { className: "refresh icon" })))));









  }}


class Settings extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "changeTimeButton",
    () => {
      this.props.timeChange(1, this.props.settingType);
    });_defineProperty(this, "changeTimeButtonNeg",
    () => {
      this.props.timeChange(-1, this.props.settingType);
    });}

  render() {
    const isEdit = !!!this.props.runningSince && this.props.workTime === this.props.timeRemaining;
    return /*#__PURE__*/(
      React.createElement("div", { className: "ui segment" }, /*#__PURE__*/

      React.createElement("h3", null, this.props.sessionName), /*#__PURE__*/

      React.createElement("div", { className: "ui buttons" }, /*#__PURE__*/
      React.createElement("button", { className: `ui button large compact ${!isEdit && 'disabled'}`, onClick: this.changeTimeButtonNeg }, "-"), /*#__PURE__*/
      React.createElement("button", { className: `ui button large compact ${!isEdit && 'disabled'}` }, makeHumanReadable(this.props.sessionSetting)), /*#__PURE__*/
      React.createElement("button", { className: `ui button large compact ${!isEdit && 'disabled'}`, onClick: this.changeTimeButton }, "+"))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));