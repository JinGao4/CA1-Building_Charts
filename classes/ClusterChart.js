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
	translate(chartPosX, chartPosY);

	push();
	translate(margin, 0);

	for (let i = 0; i < cleanedData.length; i++) {
		push();
		translate((gap + barWidth * yValues.length) * i, 0);

		for (let j = 0; j < yValues.length; j++) {
			noStroke();
			fill(barColours[j % 3]);
			rect(barWidth * j, 0, barWidth, -cleanedData[i][yValues[j]] * scaler);

			fill(axisTextColour);
			noStroke();
			textAlign(LEFT, CENTER);
			textSize(12);
			push();
			translate(barWidth, 10);
			rotate(60);
			text(cleanedData[i][xValue], 0, 0);
			pop();
		}
		pop();
	}
	pop();

	noFill();
	stroke(axisColour);
	strokeWeight(axisThickness);
	line(0, 0, 0, -chartHeight);
	line(0, 0, chartWidth, 0);

	pop();
    }

    
}