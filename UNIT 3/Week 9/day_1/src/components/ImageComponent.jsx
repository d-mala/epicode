import { Component } from "react";

class imageComponent extends Component {

    render() {

        return (
            <img src={this.props.src} alt={this.props.alt} />
        )
    }
}

export default imageComponent