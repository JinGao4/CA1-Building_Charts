class ClusterChart{
    constructor(obj){
        this.data = obj.data;
        this.xValues = obj.xValues;
        this.yValues = obj.yValues;
        this.yValuesTotal = obj.yValuesTotal;
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;
        this.axisTicksThickness = obj.axisTicksThickness;
        this.chartX = obj.chartX;
        this.chartY = obj.chartY;


        
        gap =(this.chartWidth - (this.data.length * this.barWidth * this.yValues.length) - (this.margin * 2)) /(this.data.length - 1);

	    let maxValues = [];
	    this.yValues.forEach((value) => {
		maxValues.push(this.data.map((row) => row[value]));
	    });
	    let maxValue = max(maxValues.flat(5));

	    scaler = this.chartHeight / maxValue;


        this.axisColour = color(200,200,200);
        this.barColour = color(255,255,255);
        this.textColour = color(250,250,250);
        this.axisTicksColour = color(200,200,200);
        this.numTicks = 5;
    }

    render(){// this is a method that will render the bars in the chart
        push();
	translate(this.chartPosX, this.chartPosY);

	push();
	translate(this.margin, 0);

	for (let i = 0; i < this.data.length; i++) {
		push();
		translate((gap + this.barWidth * this.yValues.length) * i, 0);

		for (let j = 0; j < this.yValues.length; j++) {
			noStroke();
			fill(this.barColours[j % 3]);
			rect(this.barWidth * j, 0, this.barWidth, -this.data[i][this.yValues[j]] * scaler);

			fill(this.axisTextColour);
			noStroke();
			textAlign(LEFT, CENTER);
			textSize(12);
			push();
			translate(this.barWidth, 10);
			rotate(60);
			text(this.data[i][this.xValue], 0, 0);
			pop();
		}
		pop();
	}
	pop();

	noFill();
	stroke(this.axisColour);
	strokeWeight(this.axisThickness);
	line(0, 0, 0, -this.chartHeight);
	line(0, 0, this.chartWidth, 0);

	pop();
    }

    
}