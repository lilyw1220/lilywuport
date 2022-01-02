const buspie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(buspie, {
  type: 'pie',
  data: {
    labels: ["Yes, can be improved.","No, does not need improvement."],
    datasets: [{
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      data: [62.5, 37.5],

      borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)'
        ],
    }]
  }
});

const ctx1 = document.getElementById('mybusChart').getContext('2d');
const mybusChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Updates for alerts/delays', 'See when the following bus is arriving', 'All bus routes in a certain area', 'Bus route map', 'Search a street name and see associated bus stops', 'How long it takes to get to the bus stop from current location', 'What time the bus is arriving'],
        datasets: [{
            label: 'Public Transit App Features',
            data: [8, 6, 3, 3, 2, 5, 3],
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
        indexAxis: 'y',
    }
});
