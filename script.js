console.log("let's build some charts!");

 // Load the Visualization API and the corechart package. 
 // Only has to happen once
google.charts.load('current', {'packages':['corechart','bar']});

// For second chart:
// 1. Set a callback for it (setOnLoadCallback)
// 2. Have the callback function for it (can be same as first, for example).
// 3. Be sure all callback function have different names.
// 4. Be sure all ballback function use different divs to draw in. Add a new div to HTML for each chart.

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);

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