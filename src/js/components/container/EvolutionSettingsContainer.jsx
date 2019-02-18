import React, {Component} from "react";
import ReactDOM from "react-dom";

import style from "./EvolutionSettingsStyle.css"
import RangeInput from "src/js/components/container/RangeInput";

class EvolutionSettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.translate = {
            pl: {
                evolve:"Ewoluuj",
                randomize: "Losuj populację",
                showChart: "Wykres dopasowania",
                headCoords: "współrzedne głowy",
                torsoCoords: "współrzedne tułowia",
                torsoRadius: "Promienie tułowia",
                armAngle: "Kąty ramion",
                legAngle: "Kąty nóg",
                handCoords: "Współrzedne dłoni",
                elbowCoords: "Współrzedne łokcia",
                kneeCoords: "Współrzedne kolana",
                heelCoords: "Współrzedne pięty",
                feetCoords: "Współrzedne stóp",
            },

            en: {
                evolve:"Evolve",
                randomize: "Randomize population",
                showChart: "Fitness chart",
                headCoords: "Head coords",
                torsoCoords: "Torso coords",
                torsoRadius: "Torso radiuses",
                armAngle: "Arm angles",
                legAngle: "Leg angles",
                handCoords: "Hand coords",
                elbowCoords: "Elbow coords",
                kneeCoords: "Knee coords",
                heelCoords: "Heel coords",
                feetCoords: "Feet coords",

            }
        };

    }

    render() {
        const {settings, details, language} = this.props;
        return (
            <div className={style.container}>
                <hr/>
                <button className={style["settings-button"]} onClick={this.evolve}>{this.translate[language].evolve }</button>
                <button className={style["settings-button"]} onClick={this.randomize}>{this.translate[language].randomize}</button>
                <button className={style["settings-button"]} onClick={this.showChart}>{this.translate[language].showChart}</button>
                <hr/>
                {this.renderRangeInputs(settings)}
                {details ? <hr/> : false}
                {details ? this.renderDetails(details): false}
            </div>
        )
    }

    renderRangeInputs(settings) {
        const propertyNames = Object.keys(settings).map((propertyName, i) => {
            return {item: propertyName, id: i}
        });

        return propertyNames.map((nameWrapper) => {
            const name = nameWrapper.item;
            return <RangeInput propertyName={name}
                               description={settings[name].description[this.props.language]}
                               min={settings[name].min}
                               max={settings[name].max}
                               step={settings[name].step}
                               value={settings[name].value}
                               onChange={this.settingsChanged}
                               key={nameWrapper.id}
            />
        })

    }

    renderDetails = (details) => {
        const {language} = this.props;

        return (
            <div className={style.details}>
                <span>{this.translate[language].headCoords}: ({details.head.x}, {details.head.y})</span>
                <span>{this.translate[language].torsoCoords}: ({details.torso.x}, {details.torso.y})</span>
                <span>{this.translate[language].torsoRadius}: {details.torsoWidth}, {details.torsoHeight}</span>
                <span>{this.translate[language].armAngle}: {details.leftArmAngle},{details.rightArmAngle}</span>
                <span>{this.translate[language].legAngle}: {details.leftLegAngle}, {details.rightLegAngle}</span>
                <span>{this.translate[language].handCoords}: ({details.leftHand.x}, {details.leftHand.y}), ({details.rightHand.x}, {details.rightHand.y})</span>
                <span>{this.translate[language].elbowCoords}: ({details.leftElbow.x}, {details.leftElbow.y}), ({details.rightElbow.x}, {details.rightElbow.y})</span>
                <span>{this.translate[language].kneeCoords}: ({details.leftKnee.x}, {details.leftKnee.y}), ({details.rightKnee.x}, {details.rightKnee.y})</span>
                <span>{this.translate[language].heelCoords}: ({details.leftHeel.x}, {details.leftHeel.y}), ({details.rightHeel.x}, {details.rightHeel.y})</span>
                <span>{this.translate[language].feetCoords}: ({details.leftToe.x}, {details.leftToe.y}), ({details.rightToe.x}, {details.rightToe.y})</span>

            </div>
        )
    };


    randomize = () => {
        this.props.onRandomize();
    };

    evolve = () => {
        this.props.onEvolve();
    };

    showChart = () => {
        this.props.onShowChart();
    };

    settingsChanged = (event) => {
        this.props.onChange(event);
    };
}

export default EvolutionSettingsContainer;