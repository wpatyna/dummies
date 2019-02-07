import React, {Component} from "react";
import ReactDom from "react-dom";

import DummyView from "src/js/components/container/DummyView";
import Dummy from "src/js/utils/Dummy";

import style from "./DummyTargetStyle.css"
import {Body} from "src/js/components/App";
import Point from "src/js/utils/Point";

import * as guid from "guid"

class DummyTargetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: null,
            buttons: {
                up: false,
                down: false,
                left: false,
                right: false,
                turnLeft: false,
                turnRight: false,
                narrowVertically: false,
                narrowHorizontally: false,
                expandVertically: false,
                expandHorizontally: false,
            }
        };
        this.translate = {
            pl: {
                up: "G",
                down: "D",
                left: "L",
                right: "P",
                turnLeft: "OL",
                turnRight: "OP",
                narrowVertically: "ZG",
                narrowHorizontally: "ZB",
                expandVertically: "RB",
                expandHorizontally: "RG",
            },

            en: {
                up: "U",
                down: "D",
                left: "L",
                right: "R",
                turnLeft: "TL",
                turnRight: "TP",
                narrowVertically: "NV",
                narrowHorizontally: "NH",
                expandVertically: "EV",
                expandHorizontally: "EH",

            }
        };

        this.movementMap = {
            extensible: {
                narrowVertically: true,
                narrowHorizontally: true,
                expandVertically: true,
                expandHorizontally: true,
            },
            movable: {
                up: true,
                down: true,
                left: true,
                right: true,
            },
            turnable: {
                turnLeft: true,
                turnRight: true,
            }
        }
    }

    render() {


        const {dummy, language} = this.props;
        const {buttons} = this.state;

        const torso = {top: `${dummy.torso.y}px`, left: `${dummy.torso.x}px`};
        const head = {top: `${dummy.head.y}px`, left: `${dummy.head.x}px`};
        const leftArm = {top: `${dummy.calcLeftArmAnchor().y}px`, left: `${dummy.calcLeftArmAnchor().x}px`};
        const rightArm = {top: `${dummy.calcRightArmAnchor().y}px`, left: `${dummy.calcRightArmAnchor().x}px`};
        const leftLeg = {top: `${dummy.calcLeftLegAnchor().y}px`, left: `${dummy.calcLeftLegAnchor().x}px`};
        const rightLeg = {top: `${dummy.calcRightLegAnchor().y}px`, left: `${dummy.calcRightLegAnchor().x}px`};
        const leftElbow = {top: `${dummy.leftElbow.y}px`, left: `${dummy.leftElbow.x}px`};
        const rightElbow = {top: `${dummy.rightElbow.y}px`, left: `${dummy.rightElbow.x}px`};
        const leftHand = {top: `${dummy.leftHand.y}px`, left: `${dummy.leftHand.x}px`};
        const rightHand = {top: `${dummy.rightHand.y}px`, left: `${dummy.rightHand.x}px`};
        const leftKnee = {top: `${dummy.leftKnee.y}px`, left: `${dummy.leftKnee.x}px`};
        const rightKnee = {top: `${dummy.rightKnee.y}px`, left: `${dummy.rightKnee.x}px`};
        const leftHeel = {top: `${dummy.leftHeel.y}px`, left: `${dummy.leftHeel.x}px`};
        const rightHeel = {top: `${dummy.rightHeel.y}px`, left: `${dummy.rightHeel.x}px`};
        const leftToe = {top: `${dummy.leftToe.y}px`, left: `${dummy.leftToe.x}px`};
        const rightToe = {top: `${dummy.rightToe.y}px`, left: `${dummy.rightToe.x}px`};
        return (
            <div className={style.container}>
                <div className={style.clickableContainer}>
                    <div className={style.clickable}>
                        <a className={`${style.editButton} ${this.state.focused === Body.torso ? style.focusedWrapper : false}`}
                           onClick={this.torsoClicked} style={torso}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.head ? style.focusedWrapper : false}`}
                           onClick={this.headClicked} style={head}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftArmAngle ? style.focusedWrapper : false}`}
                           onClick={this.leftArmClicked} style={leftArm}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightArmAngle ? style.focusedWrapper : false}`}
                           onClick={this.rightArmClicked} style={rightArm}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftLegAngle ? style.focusedWrapper : false}`}
                           onClick={this.leftLegClicked} style={leftLeg}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightLegAngle ? style.focusedWrapper : false}`}
                           onClick={this.rightLegClicked} style={rightLeg}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftElbow ? style.focusedWrapper : false}`}
                           onClick={this.leftElbowClicked} style={leftElbow}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightElbow ? style.focusedWrapper : false}`}
                           onClick={this.rightElbowClicked} style={rightElbow}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftHand ? style.focusedWrapper : false}`}
                           onClick={this.leftHandClicked} style={leftHand}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightHand ? style.focusedWrapper : false}`}
                           onClick={this.rightHandClicked} style={rightHand}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftKnee ? style.focusedWrapper : false}`}
                           onClick={this.leftKneeClicked} style={leftKnee}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightKnee ? style.focusedWrapper : false}`}
                           onClick={this.rightKneeClicked} style={rightKnee}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftHeel ? style.focusedWrapper : false}`}
                           onClick={this.leftHeelClicked} style={leftHeel}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightHeel ? style.focusedWrapper : false}`}
                           onClick={this.rightHeelClicked} style={rightHeel}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.leftToe ? style.focusedWrapper : false}`}
                           onClick={this.leftToeClicked} style={leftToe}>
                            <div className={style.editButtonInside}/>
                        </a>
                        <a className={`${style.editButton} ${this.state.focused === Body.rightToe ? style.focusedWrapper : false}`}
                           onClick={this.rightToeClicked} style={rightToe}>
                            <div className={style.editButtonInside}/>
                        </a>
                    </div>
                    {<DummyView dummy={dummy} key={guid.raw()}/>}
                </div>
                <div>
                    <button onClick={this.upButtonClicked} disabled={!buttons.up}>{this.translate[language].up}</button>
                    <button onClick={this.downButtonClicked} disabled={!buttons.down}>{this.translate[language].down}</button>
                    <button onClick={this.rightButtonClicked} disabled={!buttons.right}>{this.translate[language].right}</button>
                    <button onClick={this.leftButtonClicked} disabled={!buttons.left}>{this.translate[language].left}</button>
                    <button onClick={this.turnLeftButtonClicked} disabled={!buttons.turnLeft}>{this.translate[language].turnLeft}</button>
                    <button onClick={this.turnRightButtonClicked} disabled={!buttons.turnRight}>{this.translate[language].turnRight}</button>
                    <button onClick={this.expandVerticallyButtonClicked} disabled={!buttons.expandVertically}>{this.translate[language].expandVertically}
                    </button>
                    <button onClick={this.narrowVerticallyButtonClicked} disabled={!buttons.narrowVertically}>{this.translate[language].narrowVertically}
                    </button>
                    <button onClick={this.expandHorizontallyButtonClicked} disabled={!buttons.expandHorizontally}>{this.translate[language].expandHorizontally}
                    </button>
                    <button onClick={this.narrowHorizontallyButtonClicked} disabled={!buttons.narrowHorizontally}>{this.translate[language].narrowHorizontally}
                    </button>
                </div>
            </div>
        )
    }

    torsoClicked = (event) => {
        this.setState(
            {
                focused: Body.torso,
                buttons: {
                    ...this.movementMap.movable,
                    ...this.movementMap.extensible,
                }
            }
        )
    };

    headClicked = (event) => {
        this.setState(
            {
                focused: Body.head,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };

    leftArmClicked = (event) => {
        this.setState(
            {
                focused: Body.leftArmAngle,
                buttons: {
                    ...this.movementMap.turnable,
                }
            }
        )
    };
    rightArmClicked = (event) => {
        this.setState(
            {
                focused: Body.rightArmAngle,
                buttons: {
                    ...this.movementMap.turnable,
                }
            }
        )
    };
    leftLegClicked = (event) => {
        this.setState(
            {
                focused: Body.leftLegAngle,
                buttons: {
                    ...this.movementMap.turnable,
                }
            }
        )
    };
    rightLegClicked = (event) => {
        this.setState(
            {
                focused: Body.rightLegAngle,
                buttons: {
                    ...this.movementMap.turnable,
                }
            }
        )
    };
    leftElbowClicked = (event) => {
        this.setState(
            {
                focused: Body.leftElbow,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    rightElbowClicked = (event) => {
        this.setState(
            {
                focused: Body.rightElbow,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    leftHandClicked = (event) => {
        this.setState(
            {
                focused: Body.leftHand,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    rightHandClicked = (event) => {
        this.setState(
            {
                focused: Body.rightHand,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    leftKneeClicked = (event) => {
        this.setState(
            {
                focused: Body.leftKnee,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    rightKneeClicked = (event) => {
        this.setState(
            {
                focused: Body.rightKnee,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    leftHeelClicked = (event) => {
        this.setState(
            {
                focused: Body.leftHeel,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    rightHeelClicked = (event) => {
        this.setState(
            {
                focused: Body.rightHeel,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    leftToeClicked = (event) => {
        this.setState(
            {
                focused: Body.leftToe,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };
    rightToeClicked = (event) => {
        this.setState(
            {
                focused: Body.rightToe,
                buttons: {
                    ...this.movementMap.movable,
                }
            }
        )
    };


    upButtonClicked = (event) => {
        let point = this.props.dummy[this.state.focused];
        this.props.dummy[this.state.focused] = [point.x, point.y - 1];
        point = this.props.dummy[this.state.focused];
        this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
    };

    downButtonClicked = (event) => {
        let point = this.props.dummy[this.state.focused];
        this.props.dummy[this.state.focused] = [point.x, point.y + 1];
        point = this.props.dummy[this.state.focused];

        this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
    };

    rightButtonClicked = (event) => {
        let point = this.props.dummy[this.state.focused];
        this.props.dummy[this.state.focused] = [point.x + 1, point.y];
        point = this.props.dummy[this.state.focused];

        this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
    };

    leftButtonClicked = (event) => {
        let point = this.props.dummy[this.state.focused];
        this.props.dummy[this.state.focused] = [point.x - 1, point.y];
        point = this.props.dummy[this.state.focused];

        this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
    };

    turnLeftButtonClicked = (event) => {
        this.props.dummy[this.state.focused] += 1;

        this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});
    };

    turnRightButtonClicked = (event) => {
        this.props.dummy[this.state.focused] -= 1;

        this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});

    };

    expandVerticallyButtonClicked = (event) => {
        this.props.dummy.torsoHeight = this.props.dummy.torsoHeight + 1;
        this.props.onChange({"torsoHeight": this.props.dummy.torsoHeight});
    };

    narrowVerticallyButtonClicked = (event) => {
        this.props.dummy.torsoHeight = this.props.dummy.torsoHeight - 1;
        this.props.onChange({"torsoHeight": this.props.dummy.torsoHeight});
    };

    expandHorizontallyButtonClicked = (event) => {
        this.props.dummy.torsoWidth += 1;
        this.props.onChange({"torsoWidth": this.props.dummy.torsoWidth});

    };

    narrowHorizontallyButtonClicked = (event) => {
        this.props.dummy.torsoWidth -= 1;
        this.props.onChange({"torsoWidth": this.props.dummy.torsoWidth});

    };

}

export default DummyTargetContainer;