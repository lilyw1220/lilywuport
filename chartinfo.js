var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['To Manage Projects', 'For Team Collaboration', 'To Share Content', 'To Create and Edit Content', 'To Save Weblinks', 'To Back Up Content', 'To Transfer Files Between Devices'],
        datasets: [{
            label: 'Users Select Their Top 3 Reasons for Cloud Storage Usage',
            data: [12, 17, 16, 17, 6, 18, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(245, 66, 221, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(245, 66, 221, 1)',
            ],
            borderWidth: 2

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var userchart2 = document.getElementById('vertbarChart').getContext('2d');
var vertbarChart = new Chart(userchart2, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Very Useful',
            data: [16, 9, 20, 22, 22, 17, 24],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)'
        }, {
            label: 'Somewhat Useful',
            data: [8, 11, 4, 2, 2, 7, 0],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            type: 'bar'
        }, {
            label: 'Not Useful',
            data: [0, 4, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            type: 'bar'

      }],
        labels: ['Organize Content with Tags', 'Saving Web links', 'Create Content', 'Share Files and Folders', 'Edit Files in the Cloud', 'Simultaneous collaboration', 'Upload From Devices']
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var userchart3 = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(userchart3, {
const config = {
  type: 'pie',
  data: data,

  const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
});
