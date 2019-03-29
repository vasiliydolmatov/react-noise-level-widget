import React, { Component, Fragment } from "react";
import "./styles.scss";

class NoizeLevelWidget extends Component {
  constructor(props) {
    super();
    this.state = {
      noiseLevel: props.noiseLevel,
      error: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    if (value > 100) {
      this.setState({ error: "The value should be less then 100" });
      return null;
    }
    this.setState({ [name]: value, error: "" });
  };

  renderBattery = () => {
    const { noiseLevel } = this.state;
    const batteryItems = [];
    const activeItemsCount = (noiseLevel * 20) / 100;

    let color = "#eeeeee";
    for (let i = 0; i < 20; i++) {
      if (i + Math.round(activeItemsCount) === 20) {
        color = "#ffca00";
      }
      batteryItems.push(
        <Fragment key={i}>
          <div
            style={{ backgroundColor: color }}
            className="nl-widget-content-battery-item"
          >
            {i === 0 && (
              <span className="nl-widget-content-battery-helper-text">130</span>
            )}
            {i === 19 && (
              <span className="nl-widget-content-battery-helper-text">30</span>
            )}
          </div>
        </Fragment>
      );
    }
    return batteryItems;
  };

  render() {
    const { noiseLevel, error } = this.state;
    return (
      <div className="nl-container">
        <div className="nl-input">
          <input
            type="number"
            max="100"
            step="5"
            placeholder="Add the number of dB in % (1-100) :"
            name="noiseLevel"
            value={noiseLevel || ""}
            onChange={this.handleChange}
          />
          {error && <p className="nl-error">{error}</p>}
        </div>
        <div className="nl-widget">
          <header className="nl-widget-header">
            <h4 className="nl-widget-header-title">NOISE LEVEL</h4>
          </header>
          <div className="nl-widget-content">
            <div className="nl-widget-content-battery">
              <div className="nl-widget-content-battery-info">
                <p>{+noiseLevel + 30}</p>
                <p>dB</p>
              </div>
              {this.renderBattery()}
            </div>
            <div className="nl-widget-content-time">
              <h5 className="nl-widget-content-time-text">
                Last reading: 03/11/2019 08:11 AM
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoizeLevelWidget;
