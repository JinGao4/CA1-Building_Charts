class LineChart{
    constructor(obj){
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.yValuesTotal = obj.yValuesTotal;
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;
        this.axisTicksThickness = obj.axisTicksThickness;
        this.chartX = obj.chartX;
        this.chartY = obj.chartY;


        
        this.gap =( this.chartWidth -  this.data.length *  this.barWidth -  this.margin * 2) /( this.data.length - 1);
        this.scaler =  this.chartHeight / max( this.data.map((row) => row[this.yValue]));


        this.axisColour = color(200,200,200);
        this.barColours = [color(255,255,255), color(255, 0,0 ), color(0,255,0)];
        this.textColour = color(250,250,250);
        this.axisTicksColour = color(200,200,200);
        this.numTicks = 5;
    }

    render(){ // this is a method that will render the bars in the chart
        push();
            translate(this.chartX, this.chartY);

            push();
                translate(this.margin, 0);

                beginShape();
                    for (let i = 0; i < this.data.length; i++) {
                        let xPos = (this.barWidth + this.gap) * i;
                        stroke(this.barColours);
                        strokeWeight(1);
                        noFill();
                        vertex(xPos, -this.data[i][this.yValue] * this.scaler);

                        stroke(255, 0, 0);
                        strokeWeight(5);
                        ellipse(xPos, -this.data[i][this.yValue] * this.scaler, 10, 10);
                    }
                endShape();

                for (let i = 0; i < this.data.length; i++) {
                    let xPos = (this.barWidth + this.gap) * i;

                    fill(this.axisColour);
                    noStroke();
                    textAlign(LEFT, CENTER);
                    textSize(8);
                    push();
                    translate(xPos +this.barWidth / 2, 10);
                    rotate(60);
                    text(this.data[i][this.xValue], 0, 0);
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