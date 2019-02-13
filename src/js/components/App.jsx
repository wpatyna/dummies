import React, {Component} from "react";
import ReactDOM from "react-dom";


import EvolutionSettingsContainer from "./container/EvolutionSettingsContainer";
import DummiesGridContainer from "src/js/components/container/DummiesGridContainer";
import Dummy from "src/js/utils/Dummy";
import DummyTargetContainer from "src/js/components/container/DummyTargetContainer";

import style from "./app.css"
import Evolution from "src/js/utils/Evolution";
import Chart from "src/js/components/container/Chart";
import Point from "src/js/utils/Point";

import remove from "../../icons/delete.svg"

export const Body = Object.freeze({
    torsoHeight: "torsoHeight",
    torsoWidth: "torsoWidth",
    torso: "torso",
    leftLegAngle: "leftLegAngle",
    rightLegAngle: "rightLegAngle",
    leftKnee: "leftKnee",
    rightKnee: "rightKnee",
    leftHeel: "leftHeel",
    rightHeel: "rightHeel",
    leftToe: "leftToe",
    rightToe: "rightToe",
    leftArmAngle: "leftArmAngle",
    rightArmAngle: "rightArmAngle",
    leftElbow: "leftElbow",
    rightElbow: "rightElbow",
    leftHand: "leftHand",
    rightHand: "rightHand",
    head: "head",
});

class App extends Component {
    constructor() {
        super();

        const targetDummy = new Dummy();
        const populationSize = 12;
        const mutationProp = 0.1;
        const selectivePressure = 2;
        targetDummy.initialize();
        const evolution = new Evolution(targetDummy, populationSize, mutationProp, selectivePressure);


        this.state = {
            language: 'pl',
            evolution: evolution,
            dummies: evolution.population,
            targetDummy: targetDummy,
            details: undefined,
            focusedDummy: undefined,
            showChart: false,
            history: [],
            settings: {
                iteration: {description: {pl: "Iteracje", en: "Iteration"}, min: 1, max: 100, step: 1, value: 10},
                selectivePressure: {
                    description: {pl: "Napór selekcyjny", en: "Selective pressure"},
                    min: 0.1,
                    max: 10,
                    step: 0.1,
                    value: selectivePressure
                },
                mutationProb: {
                    description: {pl: "Prawdop. mutacji zmiennej", en: "Mutation probability"},
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: mutationProp
                },
                populationSize: {description: {pl: "Rozmiar populacji", en: "Population size"}, min: 4, max: 36, step: 1, value: populationSize},
                childrenSize: {description: {pl: "Liczonść potomstwa", en: "Children count"}, min: 0, max: evolution.maxChildrenCount, step: 1, value: 1}
            }
        };
        window.onresize = (event) => {

        }

    }

    componentDidMount(){
        const language = this.getParameterByName('lang');
        if (language){
            this.setState({language: language});
        }
    }


    getParameterByName = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };


    randomizeGrid = () => {

        const darwin = new Evolution(this.state.targetDummy, this.state.settings.populationSize.value, this.state.settings.mutationProb.value, this.state.settings.selectivePressure.value);

        this.setState({
            evolution: darwin,
            dummies: darwin.population,
            history: [...darwin.statisticsHistory],
            details: undefined,
            focusedDummy: undefined
        });
    };

    evolveDummies = () => {
        this.state.evolution.mutProb = this.state.settings.mutationProb.value;
        this.state.evolution.selPres = this.state.settings.selectivePressure.value;
        this.state.evolution.childrenCount = this.state.settings.childrenSize.value;

        for (let i = 0; i < this.state.settings.iteration.value; i++) {
            this.state.evolution.step();
        }
        this.setState({
            dummies: [...this.state.evolution.population],
            history: [...this.state.evolution.statisticsHistory],
            details: undefined,
            focusedDummy: undefined
        });
    };


    showChart = () => {
        this.setState({showChart: true, history: [...this.state.evolution.statisticsHistory]})
    };

    hideChart = () => {
        this.setState({showChart: false})
    };

    settingsChanged = (event) => {
        //update max children count in case of population size changes
        let toUpdate = {
            ...this.state.settings[event.propertyName],
            value: event.value
        };

        let propertiesToUpdate = {
            settings: {
                ...this.state.settings,
                [event.propertyName]: toUpdate
            }
        };
        if (this.state.settings.populationSize.value !== propertiesToUpdate.settings.populationSize.value) {
            propertiesToUpdate.evolution = new Evolution(
                this.state.targetDummy,
                propertiesToUpdate.settings.populationSize.value,
                propertiesToUpdate.settings.mutationProb.value,
                propertiesToUpdate.settings.selectivePressure.value
            );
            propertiesToUpdate.dummies = propertiesToUpdate.evolution.population;
            propertiesToUpdate.settings.childrenSize = {
                ...propertiesToUpdate.settings.childrenSize,
                max: this.state.evolution.maxChildrenCount,
                value: Math.min(propertiesToUpdate.settings.childrenSize.max, propertiesToUpdate.settings.childrenSize.value)
            };
            propertiesToUpdate.details = undefined;
            propertiesToUpdate.focusedDummy = undefined;

        }

        this.setState({...propertiesToUpdate});
    };

    showDetails = (event) => {
        this.setState({details: event.dummy, focusedDummy: event.id});
    };

    targetChanged = (event) => {
        const bodyParts = {
            ...this.state.targetDummy.bodyParts,
            ...event
        };
        const targetDummy = new Dummy(bodyParts);
        this.state.evolution.targetDummy = targetDummy;
        this.setState({targetDummy: targetDummy});
    };

    render() {
        const {dummies, focusedDummy, settings, targetDummy, details, history, language} = this.state;
        return (
            <div className={style["app-container"]}>

                {/*<div ref={this.gridContainer}>*/}
                <DummiesGridContainer dummies={dummies}
                                      focusedDummy={focusedDummy}
                                      onShowDetails={this.showDetails}/>
                {/*</div>*/}

                <div className={style.sidenav}>
                    <DummyTargetContainer dummy={targetDummy} language={language} onChange={this.targetChanged}/>
                    <EvolutionSettingsContainer onRandomize={this.randomizeGrid}
                                                onEvolve={this.evolveDummies}
                                                onShowChart={this.showChart}
                                                onChange={this.settingsChanged}
                                                details={details}
                                                settings={settings}
                                                language={language}
                    />
                </div>
                {this.state.showChart ?
                    (<div className={style.chartPopup}>
                        <button className={style.closeButton} onClick={this.hideChart}><img className={style.remove} src={remove}/></button>
                        <Chart className={style.chart} language={language} history={history}/>

                    </div>) : false
                }
            </div>
        )
    }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;