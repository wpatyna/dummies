import React, {Component} from "react"
import ReactDom from "react-dom"

import {CanvasJs, CanvasJSChart} from "../Chart/canvasjs.react"
import style from "./Chart.css"

class Chart extends Component {
    constructor(props) {
        super(props);
        this.translate = {
            pl: {
                axisY: "Błąd",
                axisX: "Pokolenia"
            },
            en: {
                axisY: "Error",
                axisX: "Generations"
            }
        }
    }

    render() {
        const {history, language} = this.props;
        const data = [{
            type: "line",
            lineThickness: 2.5,
            dataPoints: history.map((point) => {
                    return {y: point.distance}
                })
        },
            {
            type: "error",
            lineColor: "rgba(224, 35, 35, 0.6)",
            stemColor: "rgba(224, 35, 35, 0.6)",
            whiskerColor: "rgba(224, 35, 35, 0.6)",
            whiskerLength: 10,
            whiskerThickness: 0.5,
            stemThickness:0.5,
            dataPoints: history.map((point, i) => {
                return {y: [point.distance - point.std / 2, point.distance + point.std / 2]}
            })
        }
        ];

        const spanStyle = {
            position: 'absolute',
            top: '10px',
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#d85757',
            padding: '0px 4px',
            color: '#ffffff'
        };

        const options = {
            zoomEnabled: true,
            animationEnabled: true,
            title: {
                text: ""
            },
            axisY: {
                includeZero: false,
                title: this.translate[language].axisY,

            },
            axisX: {
                title: this.translate[language].axisX,
            },
            data: data  // random data
        };

        return (
            <div className={style.container}>
                <CanvasJSChart options={options}
                               onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                <span id="timeToRender" style={spanStyle}/>
            </div>
        )
    }
}

export default Chart;