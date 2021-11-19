import React from "react";
import "./Carousel.scss" ;

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    previousImage(){
        let newIndex =
            this.state.currentIndex === 0 ?
                this.props.pictures.length - 1 :
                this.state.currentIndex - 1

        this.setState(
            {
                currentIndex: newIndex
            }
        )
    }

    nextImage(){
        let newIndex =
            this.state.currentIndex === this.props.pictures.length - 1 ?
                0 :
                this.state.currentIndex + 1

        this.setState(
            {
                currentIndex: newIndex
            }
        )
    }

    render(){
        return (
            <div className="carousel">

                {
                    this.props.pictures.map(
                        (picture, index) => <img
                                        className="carousel__picture"
                                        src={picture}
                                        visible={index === this.state.currentIndex ? "true" : ""}
                                        alt={this.props.picturesTitle}
                                        title={this.props.picturesTitle}
                                        key={picture}
                                    />
                    )
                }
                <div className="carousel__nav">
                    <div className="carousel__nav-previous" onClick={this.previousImage.bind(this)}>
                    </div>
                    <div className="carousel__nav-next" onClick={this.nextImage.bind(this)}>
                    </div>
                </div>

            </div>
        )
    }
}

export default Carousel ;