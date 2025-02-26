class PieChart{
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

        this.axisColour = color(200,200,200);
        this.barColour = color(255,255,255);
        this.axisTicksColour = color(200,200,200);
        this.numTicks = 5;

        this.myNewArray = this.data.map(row => row.Primary);
	    this.total = 0;

	    this.myNewArray.forEach(item => this.total = this.total + item);
	    console.log(this.total)
    }

    render(){// this is a method that will render the bars in the chart
        push()
            translate(this.chartX,this.chartY);

            for(let i=0;i<this.myNewArray.length;i++){
                fill(255)
                noStroke()
                let start = 0;
                let end =360/this.myNewArray.length
            
                let mid = (end - start)/2;
                let xPos = 200 * cos (mid);
                let yPos = 200 * sin (mid);
                let circleWidth = yPos * cos(mid);
                ellipse(xPos,yPos,circleWidth*2,circleWidth*2)

                arc(0,0,400,400,start,end,PIE);
                    
                rotate(end );
            }

                
            for(let i=0;i<this.myNewArray.length;i++){
                fill(random(150));
                stroke(255)
                let start = 0;
                let end = 360/this.myNewArray.length;

                let maxValue = max(this.myNewArray)
                let scaleValue = (400/maxValue);
                let height = ((this.myNewArray[i]/maxValue)*400); 

                let mid = (end - start)/2;
                let xPos = height/2 * cos (mid);
                let yPos = height/2 * sin (mid);
                let circleWidth = yPos * cos(mid);
                ellipse(xPos,yPos,circleWidth*2,circleWidth*2)
                
                //console.log(scaleValue,this.myNewArray);
                noStroke()
                arc(0,0,height,height,start,end,PIE);
                
                rotate(end);
            }

            for (let i = 0; i < this.myNewArray.length; i++) {
                let start = (i * (360 / this.myNewArray.length));
                let end = ((i + 1) * (360 / this.myNewArray.length));
            
                // Find the middle of the arc where the text should go
                let mid = (start + end) / 2;
            
                // Set the position where the text will appear (slightly outside the circle)
                this.xValue = 200 * cos(mid) * 1.2; // The multiplier controls how far outside the pie the text is
                this.yValues = 200 * sin(mid) * 1.2;
            
                // Display the text at the calculated position
                fill(255);
                noStroke();
                textAlign(CENTER, CENTER);
                text(this.myNewArray[i], this.xValue, this.yValues); // You can change `this.myNewArray[i]` to any label you want to show
            }
        pop();
    }

    
}