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
                <DummyView dummy={this.props.dummy} dim={this.props.dim}/>
            </div>
        )
    }
}

class DummiesGridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: this.props.focusedDummy,
            dim: {width: 3*180 ,height: 4*180}
        };
        this.container = React.createRef();
    }

    componentDidMount() {

        const node = this.container.current;
        this.setState({dim: {width: node.offsetWidth, height: node.offsetHeight}});

        window.onresize = () => {
            const node = this.container.current;
            this.setState({dim: {width: node.offsetWidth, height: node.offsetHeight}});
        }
    }


    render() {
        const {dim} = this.state;
        const dummies = this.props.dummies.map((dummy, i) => {
            return {item: dummy, id: guid.raw(), iter: i}
        });
        const focused = this.props.focusedDummy;
        return (
            <div  ref={this.container}  className={style.container}>
                {/*<div className={style.squareContainer}>*/}
                    {this.renderGrid(dummies, focused, dim)}
                {/*</div>*/}
            </div>
        )
    }

    renderGrid = (dummies, focused, dim) => {
        const columnSize = Math.ceil(Math.sqrt(dummies.length));
        let columnCount = columnSize;
        if (Math.pow(columnSize, 2) - dummies.length >= columnSize) {
            columnCount -= 1;
        }
        let maxDim = Math.floor(dim.width / columnCount) - 1;
        if ((maxDim * columnSize) > dim.height ){
            maxDim = Math.floor(dim.height / columnSize) - 1;
        }
        const grid = [];
        for (let i = 0; i < columnCount; i++) {
            grid.push(
                <div className={style.column} key={i}>
                    {this.renderColumn(dummies.slice(columnSize * i, columnSize * (i + 1)),columnSize, focused, maxDim)}
                </div>
            );

        }
        // if (columnSize > columnCount){
        //     grid.push(
        //         <div className={style.column} key={grid.length}/>
        //     );
        // }
        return grid

    };

    renderColumn = (dummies, columnSize, focused, dim) => {
        const wrappers = dummies.map((dummyWrapper) => {
            return (
                <DummyViewWrapper dummy={dummyWrapper.item} key={dummyWrapper.id} id={dummyWrapper.iter}
                                  focused={focused === dummyWrapper.iter} dim={dim} onClick={this.showDetails}/>
            )
        });

        for (let i=0; i < (columnSize - dummies.length); i++){
            wrappers.push((
                <div className={style.emptyDummyWrapper} key={i}/>
            ))
        }

        return wrappers;

    }

    showDetails = (event) => {
        this.props.onShowDetails(event);
    }

}

export default DummiesGridContainer;
