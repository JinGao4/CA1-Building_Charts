let data = [];
let cleanedData = [];
let charts = [];

function preload() {
  data = loadTable("data/ChartData.csv", "csv", "header"); // this will load the data from the csv file
}

function cleanData() {
  for (let i = 0; i < data.rows.length; i++) {
    // this will loop through the rows of the data
    cleanedData.push(data.rows[i].obj); // this will push the object into the cleanedData array
  }
  for (let i = 0; i < cleanedData.length; i++) {
    // this will loop through the cleanedData array
    cleanedData[i].Primary = parseInt(cleanedData[i].Primary); // this will convert the string to an integer
    cleanedData[i].Secondary = parseInt(cleanedData[i].Secondary);
    cleanedData[i].Third_Level = parseInt(cleanedData[i].Third_Level);
  }
  console.log(cleanedData);
}

function setup() {
  createCanvas(5000, 5000);
  angleMode(DEGREES); // this will change the angle mode to degrees
  noLoop(); // this will stop the draw function from looping
  cleanData();
  charts.push(
    new BarChart({
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
      chartY: 350,
    })
  );

  charts.push(
    new BarChartSide({
      data: cleanedData,
      xValues: "Years",
      yValues: "Primary",
      chartHeight: 250,
      chartWidth: 250,
      barHeight: 10,
      margin: 15,
      axisThickness: 4,
      axisTicksThickness: 4,
      chartX: 120,
      chartY: 800,
    })
  );

  charts.push(
    new ClusterChart({
      data: cleanedData,
      xValues: "Years",
      yValues: ["Primary", "Secondary", "Third_Level"],
      yValuesTotal: "Total",
      chartHeight: 250,
      chartWidth: 500,
      barWidth: 10,
      margin: 15,
      axisThickness: 4,
      axisTicksThickness: 4,
      chartX: 120,
      chartY: 1250,
    })
  );

  charts.push(
    new LineChart({
      data: cleanedData,
      xValue: "Years",
      yValue: 'Third_Level',
      chartHeight: 250,
      chartWidth: 250,
      barWidth: 10,
      margin: 15,
      axisThickness: 4,
      axisTicksThickness: 4,
      chartX: 800,
      chartY: 900,
    })
  );

  charts.push(
    new PieChart({
      data: cleanedData,
      xValues: "Years",
      yValues: ["Primary", "Secondary", "Third_Level"],
      chartHeight: 250,
      chartWidth: 250,
      barWidth: 10,
      margin: 15,
      axisThickness: 4,
      axisTicksThickness: 4,
      chartX: 900,
      chartY: 1250,
    })
  );

  charts.push(
    new StackedChart({
      data: cleanedData,
      xValues: "Years",
      yValues: ["Primary", "Secondary", "Third_Level"],
      yValueTotal: "Total",
      chartHeight: 250,
      chartWidth: 250,
      barWidth: 10,
      margin: 15,
      axisThickness: 4,
      axisTicksThickness: 4,
      chartX: 600,
      chartY: 350,
    })
  );
}

function draw() {
  background(50, 50, 50);
  console.log(charts);

    charts[0].renderBars(),
    charts[0].renderAxis(),
    charts[0].renderLabels()
    
    charts.forEach((chart, i) => {
      if (typeof chart.renderBars === "function") {// this will check if the chart has a renderBars method
        chart.renderBars();
      }

      if (typeof chart.renderAxis === "function") {
        chart.renderAxis();
      }

      if (typeof chart.renderLabels === "function") {
        chart.renderLabels();
      }

      if (typeof chart.render === "function") {
        chart.render();
      }
    });
}
