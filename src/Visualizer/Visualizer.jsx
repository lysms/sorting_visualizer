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

    async get_value() {
        let slider = document.getElementById("myRange");
        let output = document.getElementById("demo");
        output.innerHTML = slider.value

        console.log(slider.oninput)
        slider.oninput = function () {
            output.innerHTML = this.value;
            return (output.innerHTML);
        }
        return (output.innerHTML);

    }

    async resetArray() {
        let array = [];
        let value = await this.get_value();
        console.log("this is the value: ", value)
        for (let i = 0; i < value; i++) {
            array.push(randomInt(5, 730))
        }
        this.setState({ array })
    }

    quickSort() {
        let value = this.state['array']
        console.log(value);

    }

    bubbleSort() {
        alert("this is bubble sort");
    }

    mergeSort() {
        alert("this is merge sort");
    }

    insertionSort() {
        alert("this is insertion sort");
    }

    selectionSort() {
        alert("this is selection sort");
    }

    heapSort() {
        alert("this is heap sort");
    }

    radixSort() {
        alert("this is radix sort");
    }

    bucketSort() {
        alert("this is bucket sort");
    }

    render() {
        const { array } = this.state;
        return (
            <div>

                <div>
                    <h2>Sorting visualizer</h2>
                </div>


                <div className="slidecontainer">
                    <input type="range" min="5" max="100" defaultValue="50" className="slider" id="myRange"></input>
                    <p>Value: <span id="demo"></span></p>
                </div>


                <div className="container">
                    {
                        array.map((value, id) =>
                            <div
                                className="value_bars"
                                key={id}
                                style={{ height: `${value / 2}px` }}>

                            </div>

                        )
                    }

                    {/* Building the toolbar */}
                    <div id="toolbar_slider">
                        <div className="generate">
                            <button onClick={() => this.resetArray()}>Generate a new array</button>
                        </div>


                        {/* ======= Start the implementation of the Sorting Algorithms ========= */}

                        {/* ################# Quick Sort ################# */}
                        <div>
                            <button onClick={() => this.quickSort()}>Quick Sort</button>
                        </div>


                        {/* ################# Bubble Sort ################# */}
                        <div>
                            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        </div>



                        {/* ################# Merge Sort ################# */}
                        <div>
                            <button onClick={() => this.mergeSort()}>Merge Sort</button>
                        </div>

                        {/* ################# Insertion Sort ################# */}
                        <div>
                            <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                        </div>

                        {/* ################# Selection Sort ################# */}

                        <div>
                            <button onClick={() => this.selectionSort()}>Selection Sort</button>
                        </div>

                        {/* ################# Heap Sort ################# */}
                        <div>
                            <button onClick={() => this.heapSort()}>Heap Sort</button>
                        </div>



                        {/* ################# Radix Sort ################# */}

                        <div>
                            <button onClick={() => this.radixSort()}>Radix Sort</button>
                        </div>


                        {/* ################# Bucket Sort ################# */}
                        <div>
                            <button onClick={() => this.bucketSort()}>Bucket Sort</button>
                        </div>
                    </div>

                </div>





            </div>
        )
    }
    // async getValue() {
    //     console.log("hello")
    //     let slider = document.getElementById("myRange");
    //     let output = document.getElementById("demo");
    //     output.innerHTML = slider.value
    //     slider.oninput = function () {
    //         output.innerHTML = this.value;
    //     }
    // }
}



function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

