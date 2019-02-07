import React, {Component} from "react";
import ReactDom from "react-dom";

import style from "./RangeInput.css"

class RangeInput extends Component {
    constructor(props) {
        super(props);
    }

    updateValue = (event) => {
        this.props.onChange({value: parseFloat(event.target.value), propertyName: this.props.propertyName});

    };

    render() {
        const {description, min, max, value, step} = this.props;
        return (
            <div className={style.container}>
                <div className={style.description}>{description}</div>
                <div className={style.sliderContainer}>
                    <input className={style.slider}
                           type="range"
                           min={min.toString()}
                           max={max.toString()}
                           step={step.toString()}
                           value={value.toString()}
                           onInput={this.updateValue}
                           onChange={this.updateValue}/>
                    <output> {value} </output>
                </div>
            </div>
        )
    }
}

export default RangeInput;