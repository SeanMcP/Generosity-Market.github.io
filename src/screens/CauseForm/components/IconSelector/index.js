import React, { Component } from 'react';
import './IconSelector.css';


class IconSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };

    this.renderIconTiles = this.renderIconTiles.bind(this);

    this.icons = ['Africa', 'Airplane', 'Apple', 'Diaper', 'Envelope', 'Globe', 'Ornament'];
  }
  render() {
    return (
      <div className="IconSelector">
        <h1>Select Your Fundraising Icon</h1>
        <div className="selector">
          <div className="button left" onClick={this.decreaseViewIndex}>
            <i className="fas fa-2x fa-chevron-left" />
          </div>
          <div className="slider">
            <div
              className="window"
              style={{ gridTemplateColumns: `repeat(${this.icons.length}, 1fr`}}
            >
              {this.renderIconTiles()}
            </div>
          </div>
          <div className="button right" onClick={this.increaseViewIndex}>
            <i className="fas fa-2x fa-chevron-right" />
          </div>
        </div>
      </div>
    );
  }

  renderIconTiles() {
    return this.icons.map((icon, i) => {
      const match = icon === this.state.selected;
      return (
        <div className={"icon-tile" + (match ? " selected" : "")} key={i} onClick={this.selectIcon.bind(this, icon)}>
          {match ? (
            <div className="overlay">
              <i className="far fa-lg fa-check-circle"/>
            </div>
          ) : null}
          <img src={this.returnIconUrl(icon)}/>
        </div>
      );
    });
  }

  returnIconUrl(name) {
    const url = require(`../../../../Assets/icons/PNG/${name}.png`);
    return url;
  }

  selectIcon(name) {
    this.setState({ selected: name });
    this.props.handleSelect(name);
  }
}

export default IconSelector;
