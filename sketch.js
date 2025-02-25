let data = [];
let cleanedData = [];
let charts =[];


function preload(){
    // data = loadTable('data/Combined.csv', 'csv', 'header');// this will load the data from the csv file
    data = loadTable('data/ChartData.csv', 'csv', 'header');// this will load the data from the csv file
}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES); // this will change the angle mode to degrees
    noLoop(); // this will stop the draw function from looping
    cleanData();
    charts.push(new BarChart({
        data: cleanedData,
        xValues: "Years",
        yValues: "Primary",
        chartHeight: 250,
        chartWidth: 250,
        barWidth: 10,
        margin: 15,
        axisThickness: 4,
        axisTicksThickness: 4,
        chartX: 120,
        chartY: 350
    }));
    
}

function cleanData(){
    for (let i = 0; i < data.rows.length; i++){// this will loop through the rows of the data
        cleanedData.push(data.rows[i].obj);   // this will push the object into the cleanedData array
        }
    for(let i=0; i<cleanedData.length; i++){ // this will loop through the cleanedData array
        cleanedData[i].Primary = parseInt(cleanedData[i].Primary); // this will convert the string to an integer
    }
    console.log(cleanedData);
      
}

function draw(){
    background(50,50,50);
    charts.forEach(chart => [
        chart.renderBars(),
        chart.renderAxis(),
        chart.renderLabels(),
        chart.renderTicks()
    ]);
}
