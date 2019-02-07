import Random from "./Random"
import Point from "./Point"

import {Body} from "src/js/components/App";

class Dummy {
    constructor(bodyParts) {
        if (!bodyParts) {
            bodyParts = {}
        }

        this._torsoVRad = bodyParts.torsoVRad || undefined;
        this._torsoHRad = bodyParts.torsoHRad || undefined;
        this._torso = bodyParts.torso || new Point();
        this._leftLegAngle = bodyParts.leftLegAngle || undefined;
        this._rightLegAngle = bodyParts.rightLegAngle || undefined;
        this._leftKnee = bodyParts.leftKnee || new Point();
        this._rightKnee = bodyParts.rightKnee || new Point();
        this._leftHeel = bodyParts.leftHeel || new Point();
        this._rightHeel = bodyParts.rightHeel || new Point();
        this._leftToe = bodyParts.leftToe || new Point();
        this._rightToe = bodyParts.rightToe || new Point();
        this._leftArmAngle = bodyParts.leftArmAngle || undefined;
        this._rightArmAngle = bodyParts.rightArmAngle || undefined;
        this._leftElbow = bodyParts.leftElbow || new Point();
        this._rightElbow = bodyParts.rightElbow || new Point();
        this._leftHand = bodyParts.leftHand || new Point();
        this._rightHand = bodyParts.rightHand || new Point();
        this._head = bodyParts.head || new Point();
        this._random = new Random();
    }

    get torsoVRad() {
        return this._torsoVRad;
    }

    set torsoVRad(torsoVRad) {
        if (torsoVRad < 64 && torsoVRad > 0) {
            this._torsoVRad = torsoVRad;
        }
    }

    get torsoHRad() {
        return this._torsoHRad;
    }

    set torsoHRad(torsoHRad) {
        if (torsoHRad < 64 && torsoHRad > 0) {
            this._torsoHRad = torsoHRad;
        }
    }

    get torso() {
        return this._torso;
    }

    set torso(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._torso.x = coord[0];
            this._torso.y = coord[1];
        }
    }

    get leftLegAngle() {
        return this._leftLegAngle;
    }

    set leftLegAngle(leftLegAngle) {
        if (leftLegAngle <= 63 && leftLegAngle >= 0) {
            this._leftLegAngle = leftLegAngle;
        }
    }

    get rightLegAngle() {
        return this._rightLegAngle;
    }

    set rightLegAngle(rightLegAngle) {
        if (rightLegAngle <= 63 && rightLegAngle >= 0) {
            this._rightLegAngle = rightLegAngle;
        }
    }

    get leftKnee() {
        return this._leftKnee;
    }

    set leftKnee(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._leftKnee.x = coord[0];
            this._leftKnee.y = coord[1];
        }
    }

    get rightKnee() {
        return this._rightKnee;
    }

    set rightKnee(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._rightKnee.x = coord[0];
            this._rightKnee.y = coord[1];
        }
    }

    get leftHeel() {
        return this._leftHeel;
    }

    set leftHeel(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._leftHeel.x = coord[0];
            this._leftHeel.y = coord[1];
        }
    }

    get rightHeel() {
        return this._rightHeel;
    }

    set rightHeel(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._rightHeel.x = coord[0];
            this._rightHeel.y = coord[1];
        }
    }

    get leftToe() {
        return this._leftToe;
    }

    set leftToe(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._leftToe.x = coord[0];
            this._leftToe.y = coord[1];
        }
    }

    get rightToe() {
        return this._rightToe;
    }

    set rightToe(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._rightToe.x = coord[0];
            this._rightToe.y = coord[1];
        }
    }

    get leftArmAngle() {
        return this._leftArmAngle;
    }

    set leftArmAngle(leftArmAngle) {
        if (leftArmAngle <= 63 && leftArmAngle >= 0) {
            this._leftArmAngle = leftArmAngle;
        }
    }

    get rightArmAngle() {
        return this._rightArmAngle;
    }

    set rightArmAngle(rightArmAngle) {
        if (rightArmAngle <= 63 && rightArmAngle >= 0) {
            this._rightArmAngle = rightArmAngle;
        }
    }

    get leftElbow() {
        return this._leftElbow;
    }

    set leftElbow(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._leftElbow.x = coord[0];
            this._leftElbow.y = coord[1];
        }
    }

    get rightElbow() {
        return this._rightElbow;
    }

    set rightElbow(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._rightElbow.x = coord[0];
            this._rightElbow.y = coord[1];
        }
    }

    get leftHand() {
        return this._leftHand;
    }

    set leftHand(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._leftHand.x = coord[0];
            this._leftHand.y = coord[1];
        }
    }

    get rightHand() {
        return this._rightHand;
    }

    set rightHand(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._rightHand.x = coord[0];
            this._rightHand.y = coord[1];
        }
    }

    get head() {
        return this._head;
    }

    set head(coord) {
        if (coord[0] < 128 && coord[0] >= 0 && coord[1] < 128 && coord[1] >= 0) {
            this._head.x = coord[0];
            this._head.y = coord[1];
        }
    }

    get bodyParts() {
        return {
            [Body.torsoVRad]: this.torsoVRad,
            [Body.torsoHRad]: this.torsoHRad,
            [Body.torso]: this.torso,
            [Body.leftLegAngle]: this.leftLegAngle,
            [Body.rightLegAngle]: this.rightLegAngle,
            [Body.leftKnee]: this.leftKnee,
            [Body.rightKnee]: this.rightKnee,
            [Body.leftHeel]: this.leftHeel,
            [Body.rightHeel]: this.rightHeel,
            [Body.leftToe]: this.leftToe,
            [Body.rightToe]: this.rightToe,
            [Body.leftArmAngle]: this.leftArmAngle,
            [Body.rightArmAngle]: this.rightArmAngle,
            [Body.leftElbow]: this.leftElbow,
            [Body.rightElbow]: this.rightElbow,
            [Body.leftHand]: this.leftHand,
            [Body.rightHand]: this.rightHand,
            [Body.head]: this.head,

        }
    }

    crossover(dummy) {
        let child = new Dummy();
        Object.keys(child.bodyParts).forEach(part => {
            if (typeof child.bodyParts[part] === "object"){
                child[part] = [(this.bodyParts[part].x + dummy.bodyParts[part].x) / 2, (this.bodyParts[part].y + dummy.bodyParts[part].y) / 2]
            }
            else {
                child[part] = (this.bodyParts[part] + dummy.bodyParts[part]) / 2;

            }
        });
        return child;
    }

    mutate(probability) {
        const bodyParts = Object.keys(this.bodyParts);
        const randomMax = bodyParts.length;
        for (let i = 0; i < randomMax; ++i) {
            if (this._random.nextDouble() <= probability) {
                const bodyPartKey = bodyParts[this._random.nextInt(randomMax)];
                if (typeof this.bodyParts[bodyPartKey] === 'object'){
                    this[bodyPartKey].x = this.mutateVar(this[bodyPartKey].x, 7);
                    this[bodyPartKey].y = this.mutateVar(this[bodyPartKey].y, 7);
                }
                else {
                    this[bodyPartKey] = this.mutateVar(this[bodyPartKey], 6);

                }
            }
        }
    }

    mutateVar(value, bitCount) {
        let disturbance = Math.floor((Math.pow(2, bitCount - 1) / 2 * this._random.nextGaussian()));
        if (value + disturbance < Math.floor(Math.pow(2, bitCount) - 1) && value + disturbance >= 0) {
            value += disturbance;
        }
        return Math.round(value);
    }

    randomize() {

        Object.keys(this.bodyParts).forEach(part => {
            if (typeof this.bodyParts[part] === 'object'){
                this[part] = [this._random.nextInt(128), this._random.nextInt(64)];
            }
            else {
                this[part] = this._random.nextInt(63) + 1;
            }
        });
        // this.head = [this._random.nextInt(128), this._random.nextInt(64)];
        // this.torso = [32 + this._random.nextInt(64), 32 + this._random.nextInt(64)];
        // this.torsoVRad = this._random.nextInt(63) + 1;
        // this.torsoHRad = this._random.nextInt(63) + 1;
        // this.leftHand = [this._random.nextInt(64), this._random.nextInt(64)];
        // this.rightHand = [64 + this._random.nextInt(64), this._random.nextInt(64)];
        // this.leftElbow = [this._random.nextInt(64), this._random.nextInt(64)];
        // this.rightElbow = [64 + this._random.nextInt(64), this._random.nextInt(64)];
        // this.leftArmAngle = this._random.nextInt(63);
        // this.rightArmAngle = this._random.nextInt(63);
        // this.leftToe = [this._random.nextInt(64), 64 + this._random.nextInt(64)];
        // this.rightToe = [64 + this._random.nextInt(64), 64 + this._random.nextInt(64)];
        // this.leftHeel = [this._random.nextInt(64), 64 + this._random.nextInt(64)];
        // this.rightHeel = [64 + this._random.nextInt(64), 64 + this._random.nextInt(64)];
        // this.leftKnee = [this._random.nextInt(64), 64 + this._random.nextInt(64)];
        // this.rightKnee = [64 + this._random.nextInt(64), 64 + this._random.nextInt(64)];
        // this.leftLegAngle = this._random.nextInt(63)+1;
        // this.rightLegAngle = this._random.nextInt(63)+1;

    }

    initialize() {
        this.torso.x = 63;
        this.torso.y = 73;
        this.torsoVRad = 30;
        this.torsoHRad = 25;
        this.leftLegAngle = 60;
        this.leftKnee.x = 23;
        this.leftKnee.y = 103;
        this.leftHeel.x = 33;
        this.leftHeel.y = 123;
        this.leftToe.x = 13;
        this.leftToe.y = 125;
        this.rightLegAngle = 60;
        this.rightKnee.x = 103;
        this.rightKnee.y = 103;
        this.rightHeel.x = 93;
        this.rightHeel.y = 123;
        this.rightToe.x = 113;
        this.rightToe.y = 125;
        this.leftArmAngle = 20;
        this.leftElbow.x = 13;
        this.leftElbow.y = 43;
        this.leftHand.x = 3;
        this.leftHand.y = 73;
        this.rightArmAngle = 20;
        this.rightElbow.x = 113;
        this.rightElbow.y = 43;
        this.rightHand.x = 123;
        this.rightHand.y = 73;
        this.head.x = 63;
        this.head.y = 20;
    }

    calculateLimbPosition(degree){
        let x = this.torsoHRad * Math.cos(this.deg2rad(degree)) + this.torso.x;
        let y = this.torsoVRad * Math.sin(this.deg2rad(degree)) + this.torso.y;
        return new Point(Math.round(x), Math.round(y));
    }

    calcLeftLegAnchor() {
        let x = this.torsoHRad * Math.cos(this.deg2rad(this.leftLegAngle + 90)) + this.torso.x;
        let y = this.torsoVRad * Math.sin(this.deg2rad(this.leftLegAngle + 90)) + this.torso.y;
        return new Point(Math.round(x), Math.round(y));
    }

    calcRightLegAnchor() {
        let x = -(this.torsoHRad * Math.cos(this.deg2rad(this.rightLegAngle + 90))) + this.torso.x;
        let y = this.torsoVRad * Math.sin(this.deg2rad(this.rightLegAngle + 90)) + this.torso.y;
        return new Point(Math.round(x), Math.round(y));
    }

    calcLeftArmAnchor() {
        let x = -(this.torsoHRad * Math.cos(this.deg2rad(this.leftArmAngle + 270))) + this.torso.x;
        let y = this.torsoVRad * Math.sin(this.deg2rad(this.leftArmAngle + 270)) + this.torso.y;
        return new Point(Math.round(x), Math.round(y));
    }

    calcRightArmAnchor() {
        let x = this.torsoHRad * Math.cos(this.deg2rad(this.rightArmAngle + 270)) + this.torso.x;
        let y = this.torsoVRad * Math.sin(this.deg2rad(this.rightArmAngle + 270)) + this.torso.y;
        return new Point(Math.round(x), Math.round(y));
    }

    computeDistanceTo(target) {
        let distance = 0.0;
        Object.keys(this.bodyParts).forEach(part => {
            if (typeof this.bodyParts[part] === 'object'){
                distance += this.bodyParts[part].calculateEuclideanDistance(target[part])
            } else {
                distance += Math.abs(this.bodyParts[part] - target[part])
            }
        });

        return distance;
    }

    deg2rad(deg) {
        return deg * 3.141592653589793 / 180.0;
    }


}

export default Dummy;