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
                headCoords: "współrzędne głowy",
                torsoCoords: "współrzędne tułowia",
                torsoRadius: "Promienie tułowia",
                armAngle: "Kąty ramion",
                legAngle: "Kąty nóg",
                handCoords: "Współrzędne dłoni",
                elbowCoords: "Współrzędne łokcia",
                kneeCoords: "Współrzędne kolana",
                heelCoords: "Współrzędne pięty",
                feetCoords: "Współrzędne stóp",
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
                <span>{this.translate[language].headCoords}: ({Math.round(details.head.x)}, {Math.round(details.head.y)})</span>
                <span>{this.translate[language].torsoCoords}: ({Math.round(details.torso.x)}, {Math.round(details.torso.y)})</span>
                <span>{this.translate[language].torsoRadius}: {Math.round(details.torsoWidth)}, {Math.round(details.torsoHeight)}</span>
                <span>{this.translate[language].armAngle}: {Math.round(details.leftArmAngle)},{Math.round(details.rightArmAngle)}</span>
                <span>{this.translate[language].legAngle}: {Math.round(details.leftLegAngle)}, {Math.round(details.rightLegAngle)}</span>
                <span>{this.translate[language].handCoords}: ({Math.round(details.leftHand.x)}, {Math.round(details.leftHand.y)}), ({Math.round(details.rightHand.x)}, {Math.round(details.rightHand.y)})</span>
                <span>{this.translate[language].elbowCoords}: ({Math.round(details.leftElbow.x)}, {Math.round(details.leftElbow.y)}), ({Math.round(details.rightElbow.x)}, {Math.round(details.rightElbow.y)})</span>
                <span>{this.translate[language].kneeCoords}: ({Math.round(details.leftKnee.x)}, {Math.round(details.leftKnee.y)}), ({Math.round(details.rightKnee.x)}, {Math.round(details.rightKnee.y)})</span>
                <span>{this.translate[language].heelCoords}: ({Math.round(details.leftHeel.x)}, {Math.round(details.leftHeel.y)}), ({Math.round(details.rightHeel.x)}, {Math.round(details.rightHeel.y)})</span>
                <span>{this.translate[language].feetCoords}: ({Math.round(details.leftToe.x)}, {Math.round(details.leftToe.y)}), ({Math.round(details.rightToe.x)}, {Math.round(details.rightToe.y)})</span>

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