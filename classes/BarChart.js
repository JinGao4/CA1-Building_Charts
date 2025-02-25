class BarChart{
    constructor(obj){
        this.data = obj.data;
        this.xValues = obj.xValues;
        this.yValues = obj.yValues;
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;
        this.axisTicksThickness = obj.axisTicksThickness;
        this.chartX = obj.chartX;
        this.chartY = obj.chartY;


        
        this.gap = (this.chartWidth - (this.data.length * this.barWidth)-(this.margin*2)) / (this.data.length-1);
        // this will calculate the gap between the bars by subtracting the width of the bars and the margin from the width of the chart and dividing by the number of bars
        this.scaler = this.chartHeight / max(cleanedData.map(row => row[this.yValues]));// this will calculate the scaler by dividing the height of the chart by the maximum value in the data

        this.axisColour = color(200,200,200);
        this.barColour = color(255,255,255);
        this.textColour = color(250,250,250);
        this.axisTicksColour = color(200,200,200);
        this.numTicks = 5;
    }

    renderBars(){// this is a method that will render the bars in the chart
        push();
            translate(this.chartX,this.chartY);

            push();
                translate(this.margin,0);
                for(let i = 0; i < this.data.length; i++){
                    let xPos = (this.barWidth + this.gap) * i;// this will calculate the x position of the bar
                    fill(this.barColour);
                    noStroke();
                    rect(xPos, 0, this.barWidth, -this.data[i][this.yValues]* this.scaler);// this will draw the bars in the chart
                    textAlign(CENTER);
                }
            pop();
        pop();
    }

    renderAxis(){// this is a method that will render the axis of the chart
        push();
            translate(this.chartX,this.chartY);
            noFill();
            stroke(this.axisColour);
            strokeWeight(this.axisThickness);
            line (0,0,0,-this.chartHeight);// this will draw the y axis
            line (0,0,this.chartWidth,0);// this will draw the x axis
        pop();
    }

    renderLabels(){// this is a method that will render the labels of the chart
        push();
            translate(this.chartX,this.chartY);
            fill(this.textColour);
            push();
                translate(this.margin,0);
                for(let i = 0; i < this.data.length; i++){
                    let xPos = (this.barWidth + this.gap) * i;// this will calculate the x position of the bar
                    
                    push();
                        translate(xPos + (this.barWidth/2), 10);// this will translate the text to the center of the bar
                        rotate(80);
                        text(this.data[i][this.xValues],0,0);// this will draw the text on the chart
                    pop();
                }
            pop();
        pop();
    }

    renderTicks(){// this is a method that will render the ticks on the axis
        push();
            translate(this.chartX,this.chartY);
            noFill();
            stroke(this.axisTicksColour);
            strokeWeight(this.axisTicksThickness);

            let tickIncrement = this.chartHeight / 5;
            for(let i = 0; i <= this.numTicks; i++){// this will loop through the number of ticks
                line(0,-tickIncrement*i,-10,-tickIncrement*i);// this will draw the ticks on the y axis
            }
        pop();
    }
}