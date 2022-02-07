import React from "react";
import "./Visualizer.css"

export default class Visualizer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            array: []
        };

    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomInt(5, 1000))
        }
        this.setState({ array })
    }

    render() {
        const { array } = this.state;
        return (
            <div>
                {
                    array.map((value, id) =>
                        <div className="value_bars" key={id}>
                            {value}
                        </div>

                    )
                }
            </div>
        )
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}