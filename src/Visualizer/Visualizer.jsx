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
        for (let i = 0; i < 310; i++) {
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
                <div className="container">
                    {
                        array.map((value, id) =>
                            <div
                                className="value_bars"
                                key={id}
                                style={{ height: `${value}px` }}>

                            </div>

                        )
                    }

                    {/* Building the toolbar */}
                    <div id="#toolbar">
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
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}