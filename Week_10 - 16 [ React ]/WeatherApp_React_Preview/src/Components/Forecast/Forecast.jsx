import React from "react";

//  Collapsible Menu
export default class Forecast extends React.Component {
  render() {
    const hiddenTexts = [
      {
        label: "Monday - 08 - 2021",
        value: (
          <div class="flex-box">
            <div>Morning: 0&deg;C</div>
            <div>Afternoon: 0&deg;C</div>
            <div>Evening: 0&deg;C</div>
            <div>Night: 0&deg;C</div>
          </div>
        ),
      },
      {
        label: "Tuesday - 08 - 2021",
        value: (
          <div class="flex-box">
            <div>Morning: 0&deg;C</div>
            <div>Afternoon: 0&deg;C</div>
            <div>Evening: 0&deg;C</div>
            <div>Night: 0&deg;C</div>
          </div>
        ),
      },
      {
        label:
          "Wednsday - 08 - 202                                                   1",
        value: (
          <div class="flex-box">
            <div>Morning: 0&deg;C</div>
            <div>Afternoon: 0&deg;C</div>
            <div>Evening: 0&deg;C</div>
            <div>Night: 0&deg;C</div>
          </div>
        ),
      },
      {
        label: "Thursday - 08 - 2021",
        value: (
          <div class="flex-box">
            <div>Morning: 0&deg;C</div>
            <div>Afternoon: 0&deg;C</div>
            <div>Evening: 0&deg;C</div>
            <div>Night: 0&deg;C</div>
          </div>
        ),
      },
      {
        label: "Fryday - 08 - 2021",
        value: (
          <div class="flex-box">
            <div>Morning: 0&deg;C</div>
            <div>Afternoon: 0&deg;C</div>
            <div>Evening: 0&deg;C</div>
            <div>Night: 0&deg;C</div>
          </div>
        ),
      },
    ];
    return <CollapsibleTxt hiddenTexts={hiddenTexts} />;
  }
}
//  Collapsible Text

class CollapsibleTxt extends React.Component {
  render() {
    return (
      <div className="collapsibleMenu">
        {this.props.hiddenTexts.map((hiddenText) => (
          <MenuItem key={hiddenText.label} hiddenText={hiddenText} />
        ))}
      </div>
    );
  }
}
//  Menu Item
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const activeStatus = this.state.visibility ? "active" : "";

    return (
      <div>
        <button
          className="collapsibleMenu--button"
          onClick={this.handleToggleVisibility}
        >
          {this.props.hiddenText.label}
          <span className="btn-icon">{this.state.visibility ? "-" : "+"} </span>
        </button>
        <p className={`collapsibleMenu--content ${activeStatus}`}>
          {this.props.hiddenText.value}
        </p>
      </div>
    );
  }
}
