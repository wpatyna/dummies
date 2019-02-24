import React, {Component} from "react";
import ReactDom from "react-dom";

import DummyView from "src/js/components/container/DummyView";
import Dummy from "src/js/utils/Dummy";

import style from "./DummyTargetStyle.css"
import {Body} from "src/js/components/App";
import Point from "src/js/utils/Point";

import * as guid from "guid"

import arrowLeft from "../../../icons/arrow-left.svg"
import rotateLeft from "../../../icons/rotate-left.svg"
import narrow from "../../../icons/narrow-diagonal.svg"
import expand from "../../../icons/expand-diagonal.svg"

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
                up: "Przesuń obiekt do góry",
                down: "Przesuń obiekt w dół",
                left: "Przesuń obiekt w lewo",
                right: "Przesuń obiekt w prawo",
                turnLeft: "Obróć obiekt w lewo",
                turnRight: "Obróć obiekt w prawo",
                narrowVertically: "Zwęź obiekt w pionie",
                narrowHorizontally: "Zwęź obiekt w poziomie",
                expandVertically: "Rozszerz obiekt w pionie",
                expandHorizontally: "Rozszerz obiekt w poziomie",
            },

            en: {
                up: "Move an object up",
                down: "Move an object down",
                left: "Move an object left",
                right: "Move an object right",
                turnLeft: "Turn an object left",
                turnRight: "Turn an object right",
                narrowVertically: "Narrow an object vertically",
                narrowHorizontally: "Narrow an object horizontally",
                expandVertically: "Expand an object vertically",
                expandHorizontally: "Expand an object horizontally",

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
                left: true,
                right: true,
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
                <div className={style.panelButtonContainer}>
                    <button className={style.panelButton} onClick={this.upButtonClicked} disabled={!buttons.up} title={this.translate[language].up}><img className={style.upArrow} src={arrowLeft}/></button>
                    <button className={style.panelButton} onClick={this.downButtonClicked} disabled={!buttons.down} title={this.translate[language].down}><img className={style.downArrow} src={arrowLeft}/></button>
                    <button className={style.panelButton} onClick={this.leftButtonClicked} disabled={!buttons.left} title={this.translate[language].left}><img className={style.leftArrow} src={arrowLeft}/></button>
                    <button className={style.panelButton} onClick={this.rightButtonClicked} disabled={!buttons.right} title={this.translate[language].right}><img className={style.rightArrow} src={arrowLeft}/></button>
                    {/*<button className={style.panelButton} onClick={this.turnLeftButtonClicked} disabled={!buttons.turnLeft} title={this.translate[language].turnLeft}><img className={style.rotateLeft} src={rotateLeft}/></button>*/}
                    {/*<button className={style.panelButton} onClick={this.turnRightButtonClicked} disabled={!buttons.turnRight} title={this.translate[language].turnRight}><img className={style.rotateRight} src={rotateLeft}/></button>*/}
                    <button className={style.panelButton} onClick={this.expandVerticallyButtonClicked} disabled={!buttons.expandVertically} title={this.translate[language].expandVertically}><img className={style.expandVertically} src={expand}/>
                    </button>
                    <button className={style.panelButton} onClick={this.narrowVerticallyButtonClicked} disabled={!buttons.narrowVertically} title={this.translate[language].narrowVertically}><img className={style.narrowVertically} src={narrow}/>
                    </button>
                    <button className={style.panelButton} onClick={this.expandHorizontallyButtonClicked} disabled={!buttons.expandHorizontally} title={this.translate[language].expandHorizontally}><img className={style.expandHorizontally} src={expand}/>
                    </button>
                    <button className={style.panelButton} onClick={this.narrowHorizontallyButtonClicked} disabled={!buttons.narrowHorizontally} title={this.translate[language].narrowHorizontally}><img className={style.narrowHorizontally} src={narrow}/>
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
        this.props.dummy[this.state.focused] = [point.x, point.y - 2];
        point = this.props.dummy[this.state.focused];
        this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
    };

    downButtonClicked = (event) => {
        let point = this.props.dummy[this.state.focused];
        this.props.dummy[this.state.focused] = [point.x, point.y + 2];
        point = this.props.dummy[this.state.focused];

        this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
    };

    rightButtonClicked = (event) => {
        if ([Body.rightLegAngle,Body.rightArmAngle].indexOf(this.state.focused) !== -1){
            this.props.dummy[this.state.focused] += 3;

            this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});

        }else if ([Body.leftLegAngle, Body.leftArmAngle].indexOf(this.state.focused) !== -1){
            this.props.dummy[this.state.focused] -= 3;

            this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});

        }else {
            let point = this.props.dummy[this.state.focused];
            this.props.dummy[this.state.focused] = [point.x + 2, point.y];
            point = this.props.dummy[this.state.focused];

            this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
        }
    };

    leftButtonClicked = (event) => {
        if ([Body.rightLegAngle,Body.rightArmAngle].indexOf(this.state.focused) !== -1){
            this.props.dummy[this.state.focused] -= 3;

            this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});

        }else if ([Body.leftLegAngle, Body.leftArmAngle].indexOf(this.state.focused) !== -1){
            this.props.dummy[this.state.focused] += 3;
            this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});

        }else {
            let point = this.props.dummy[this.state.focused];
            this.props.dummy[this.state.focused] = [point.x - 2, point.y];
            point = this.props.dummy[this.state.focused];

            this.props.onChange({[this.state.focused]: new Point(point.x, point.y)});
        }
    };

    // turnLeftButtonClicked = (event) => {
    //     this.props.dummy[this.state.focused] -= 2;
    //
    //     this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});
    // };

    turnRightButtonClicked = (event) => {
        this.props.dummy[this.state.focused] += 2;

        this.props.onChange({[this.state.focused]: this.props.dummy[this.state.focused]});

    };

    expandVerticallyButtonClicked = (event) => {
        this.props.dummy.torsoHeight = this.props.dummy.torsoHeight + 2;
        this.props.onChange({"torsoHeight": this.props.dummy.torsoHeight});
    };

    narrowVerticallyButtonClicked = (event) => {
        this.props.dummy.torsoHeight = this.props.dummy.torsoHeight - 2;
        this.props.onChange({"torsoHeight": this.props.dummy.torsoHeight});
    };

    expandHorizontallyButtonClicked = (event) => {
        this.props.dummy.torsoWidth += 2;
        this.props.onChange({"torsoWidth": this.props.dummy.torsoWidth});

    };

    narrowHorizontallyButtonClicked = (event) => {
        this.props.dummy.torsoWidth -= 2;
        this.props.onChange({"torsoWidth": this.props.dummy.torsoWidth});

    };

}

export default DummyTargetContainer;