import React from "react";

class ImageComponent extends React.Component {
  //si utilizza render() obbligatioriamente quando si usa un componente a classe
  render() {
    return <img className={this.props.className} src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImageComponent;
