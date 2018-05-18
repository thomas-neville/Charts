console.log("let's build some charts!");

 // Load the Visualization API and the corechart package. 
 // Only has to happen once
google.charts.load('current', {'packages':['corechart','bar', 'timeline']});

// For second chart:
// 1. Set a callback for it (setOnLoadCallback)
// 2. Have the callback function for it (can be same as first, for example).
// 3. Be sure all callback function have different names.
// 4. Be sure all ballback function use different divs to draw in. Add a new div to HTML for each chart.

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDonationChart);
google.charts.setOnLoadCallback(drawStudyTimeline);
google.charts.setOnLoadCallback(drawStudyBar);

// Uncomment to draw Charts 1 and 2
//google.charts.setOnLoadCallback(drawChart1);
//google.charts.setOnLoadCallback(drawChart2);

function drawStudyTimeline(){
  var container = document.getElementById('study-timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Phase of Study' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    ['General Ed', new Date(2018, 8, 1), new Date(2019, 4, 1)],
    ['Choose Major', new Date(2019, 5, 1), new Date(2019, 7, 1)],
    ['2 mjr Clss', new Date(2019, 8, 1), new Date(2020, 4, 1)],
    ['12 mjr Clss', new Date(2020, 8, 1), new Date(2022, 4, 1)]
  ]);

  chart.draw(dataTable);
}

function drawStudyBar(){
  
}



function drawDonationChart(){
  // #donation-chart is the container
  var data = google.visualization.arrayToDataTable([
          ['Allocation', 'Dollar Amount'],
          ['Administrative Cost', 4],
          ['Fundraising', 16],
          ['Youth Programs', 36],
          ['Adult Programs',44]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
          legend: 'right',
          slices: [
            {color: '#8AD1C2' },
            {color: '#9F8AD1'},
            {color: '#D18A99'},
            {color: '#BCD18A'}
          ]
        };

        var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));
        chart.draw(data, options);
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

  var data = google.visualization.arrayToDataTable([
          ['Toppings', 'Slices'],
          ['Cheese', 1],
          ['Taco', 3],
          ['Veggie Thai', 2],
          ['Hawaiian', 3],
          ['Pepperoni', 2]
        ]);

        var options = {
          chart: {
            title: 'Pizza Eaten by Slices',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
          
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div1'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Style');
  data.addColumn('number', 'Donuts');
  data.addRows([
    ['Chocolate Raspberry', 3],
    ['Lemon Poppy', 3],
    ['French Toast', 2],
    ['Plain Cake', 3],
    ['Cinni Mini', 2]
  ]);

  // Set chart options
  var options = {'title':'What Kinds of Donuts I Ate Last Night',
                 'width':500,
                 'height':500,
                 'legend':'left',
                  pieHole: 0.4,               
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}