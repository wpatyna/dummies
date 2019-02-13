import React, {Component} from "react";
import ReactDom from "react-dom";

import DummyView from "src/js/components/container/DummyView";
import Dummy from "src/js/utils/Dummy";


import style from "js/components/container/DummiesGridStyle.css";

const guid = require("guid");


class DummyViewWrapper extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {

        this.props.onClick({dummy: this.props.dummy, id: this.props.id});
    };

    render() {
        const focused = this.props.focused;
        return (
            <div onClick={this.handleClick} className={`${style.dummyWrapper} ${ focused ? style.focused : ""} `}>
                <DummyView dummy={this.props.dummy}/>
            </div>
        )
    }
}

class DummiesGridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: this.props.focusedDummy
        };
    }

    componentDidMount() {

    }


    render() {
        const dummies = this.props.dummies.map((dummy, i) => {
            return {item: dummy, id: guid.raw(), iter: i}
        });
        const focused = this.props.focusedDummy;
        return (
            <div className={style.container}>
                <div className={style.squareContainer}>
                    {this.renderGrid(dummies, focused)}
                </div>
            </div>
        )
    }

    renderGrid = (dummies, focused) => {
        const columnSize = Math.ceil(Math.sqrt(dummies.length));
        let columnCount = columnSize;
        if (Math.pow(columnSize, 2) - dummies.length >= columnSize) {
            columnCount -= 1;
        }
        const grid = [];
        for (let i = 0; i < columnCount; i++) {
            grid.push(
                <div className={style.column} key={i}>
                    {this.renderColumn(dummies.slice(columnSize * i, columnSize * (i + 1)),columnSize, focused)}
                </div>
            );

        }
        if (columnSize > columnCount){
            grid.push(
                <div className={style.column} key={grid.length}/>
            );
        }
        return grid

    };

    renderColumn = (dummies, columnSize, focused) => {
        const wrappers = dummies.map((dummyWrapper) => {
            return (
                <DummyViewWrapper dummy={dummyWrapper.item} key={dummyWrapper.id} id={dummyWrapper.iter}
                                  focused={focused === dummyWrapper.iter} onClick={this.showDetails}/>
            )
        });

        for (let i=0; i < (columnSize - dummies.length); i++){
            wrappers.push((
                <div className={style.dummyWrapper} key={i}/>
            ))
        }

        return wrappers;

    }

    showDetails = (event) => {
        this.props.onShowDetails(event);
    }

}

export default DummiesGridContainer;
