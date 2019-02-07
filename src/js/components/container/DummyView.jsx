import React, {Component} from "react";
import ReactDom from "react-dom";

import CanvasContext from "src/js/utils/CanvasContext";

class DummyView extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.dummy = this.props.dummy;
        this.contextWrapper = new CanvasContext();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        this.drawDummyOnCanvas(context);
    }

    drawDummyOnCanvas(ctx) {
        this.contextWrapper.setColor(ctx, "#999988");
        this.contextWrapper.fillOval(ctx,
            Math.round(this.dummy.torso.x - this.dummy.torsoHRad),
            Math.round(this.dummy.torso.y - this.dummy.torsoVRad),
            Math.round(2 * this.dummy.torsoHRad),
            Math.round(2 * this.dummy.torsoVRad)
        );

        this.contextWrapper.setColor(ctx, "#dddd00");

        let point = this.dummy.calcLeftLegAnchor();

        this.contextWrapper.drawLine(ctx,
            Math.round(point.x),
            Math.round(point.y),
            Math.round(this.dummy.leftKnee.x),
            Math.round(this.dummy.leftKnee.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.leftKnee.x),
            Math.round(this.dummy.leftKnee.y),
            Math.round(this.dummy.leftHeel.x),
            Math.round(this.dummy.leftHeel.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.leftHeel.x),
            Math.round(this.dummy.leftHeel.y),
            Math.round(this.dummy.leftToe.x),
            Math.round(this.dummy.leftToe.y)
        );

        point = this.dummy.calcRightLegAnchor();

        this.contextWrapper.drawLine(ctx,
            Math.round(point.x),
            Math.round(point.y),
            Math.round(this.dummy.rightKnee.x),
            Math.round(this.dummy.rightKnee.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.rightKnee.x),
            Math.round(this.dummy.rightKnee.y),
            Math.round(this.dummy.rightHeel.x),
            Math.round(this.dummy.rightHeel.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.rightHeel.x),
            Math.round(this.dummy.rightHeel.y),
            Math.round(this.dummy.rightToe.x),
            Math.round(this.dummy.rightToe.y)
        );

        point = this.dummy.calcLeftArmAnchor();

        this.contextWrapper.drawLine(ctx,
            Math.round(point.x),
            Math.round(point.y),
            Math.round(this.dummy.leftElbow.x),
            Math.round(this.dummy.leftElbow.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.leftElbow.x),
            Math.round(this.dummy.leftElbow.y),
            Math.round(this.dummy.leftHand.x),
            Math.round(this.dummy.leftHand.y)
        );

        point = this.dummy.calcRightArmAnchor();

        this.contextWrapper.drawLine(ctx,
            Math.round(point.x),
            Math.round(point.y),
            Math.round(this.dummy.rightElbow.x),
            Math.round(this.dummy.rightElbow.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.rightElbow.x),
            Math.round(this.dummy.rightElbow.y),
            Math.round(this.dummy.rightHand.x),
            Math.round(this.dummy.rightHand.y)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.head.x),
            Math.round(this.dummy.head.y),
            Math.round(this.dummy.torso.x),
            Math.round(this.dummy.torso.y - this.torsoVRad)
        );
        this.contextWrapper.fillOval(ctx,
            Math.round(this.dummy.head.x - 16),
            Math.round(this.dummy.head.y - 16),
            Math.round(32),
            Math.round(32)
        );

        this.contextWrapper.setColor(ctx, "#FFFFFF");

        this.contextWrapper.fillOval(ctx,
            Math.round(this.dummy.head.x - 9),
            Math.round(this.dummy.head.y - 7),
            Math.round(6),
            Math.round(6)
        );
        this.contextWrapper.fillOval(ctx,
            Math.round(this.dummy.head.x + 3),
            Math.round(this.dummy.head.y - 7),
            Math.round(6),
            Math.round(6)
        );

        this.contextWrapper.setColor(ctx, "#000000");

        this.contextWrapper.fillOval(ctx,
            Math.round(this.dummy.head.x - 6),
            Math.round(this.dummy.head.y - 6),
            Math.round(3),
            Math.round(3)
        );
        this.contextWrapper.fillOval(ctx,
            Math.round(this.dummy.head.x + 3),
            Math.round(this.dummy.head.y - 6),
            Math.round(3),
            Math.round(3)
        );
        this.contextWrapper.drawLine(ctx,
            Math.round(this.dummy.head.x - 4),
            Math.round(this.dummy.head.y + 4),
            Math.round(this.dummy.head.x + 4),
            Math.round(this.dummy.head.y + 4),
            2
        );

    }

    render() {
        return (
            <canvas style={{"minWidth": 0, "minHeight": 0, "height": "100%", "width": "100%"}} ref={this.canvasRef} width={128} height={128}/>
        )
    }
}

export default DummyView;