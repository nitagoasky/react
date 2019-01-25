import React, { Component } from "react";
import ColumnLayout from "../presentational/column-layout";
class IndexContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { title } = this.state;
        return (
            <div>
                <ColumnLayout width={"50%"}/>
                <ColumnLayout width={"50%"}/>
            </div>
        );
    }
}
export default IndexContainer;
