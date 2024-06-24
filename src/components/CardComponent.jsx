import React from "react";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

class CardComponent extends React.Component {
  render() {
    return (
      <div className="card">
        <ImageComponent style={{ height: "230px" }} className="card-img-top object-fit-cover" src={this.props.src} />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <a href="#">
            <ButtonComponent btnText={this.props.btnText} className="btn btn-primary" />
          </a>
        </div>
      </div>
    );
  }
}

export default CardComponent;
