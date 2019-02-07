class Point {

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    }

    get y() {
        return this._y;
    }

    calculateEuclideanDistance(p) {
        return Math.sqrt(Math.pow((this._x - p._x), 2) + Math.pow((this._y - p._y), 2));
    }

    toString() {
        return `(${this._x},${this._y})`;
    }
}

export default Point;