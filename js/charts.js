var parties_lix = document.getElementById('parties_lix');

var parties_lix_chart = new Chart(parties_lix, {
    type: 'bar',
    data: {
        labels: ['S', 'UFG', 'IA', 'V', 'SF', 'EL', 'RV', 'LA', 'KF', 'DF', 'ALT', 'NB', 'SP', 'SIU', 'JF'],
        datasets: [{
            label: 'lixtal',
            backgroundColor: ['rgba(201,0,44,0.6)', 'rgba(24,169,153,0.6)', 'rgba(239,242,241,0.6)', 'rgba(0,40,131,0.6)', 'rgba(196,22,28,0.6)', 'rgba(199,48,81,0.6)', 'rgba(254,0,148,0.6)', 'rgba(18,33,63,0.6)', 'rgba(0,88,60,0.6)', 'rgba(206,47,53,0.6)', 'rgba(0,255,0,0.6)', 'rgba(1,80,95,0.6)', 'rgba(78,122,161,0.6)', 'rgba(239,242,241,0.6)', 'rgba(239,242,241,0.6)'],
            data: [42.44, 41.75, 41.5, 41.03, 40.95, 40.7, 40.33, 39.62, 39.52, 38.71, 38.64, 38.32, 38.09, 37.08, 35.73]
        }]
    },
    options: {
        legend: {
            display: false
        },
        responsive: true,
        title: {
          display: true,
          text: 'Lix analysis',
          fontColor: 'rgba(255, 255, 255, 1)',
          fontSize: '18'
        },
        scales: {
          xAxes: [{
            display: true,
            
            gridLines: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)',
            },
            scaleLabel: {
                display: true,
                labelString: 'Parti',
                fontColor: 'rgba(255, 255, 255, 1)'
            },
            ticks: {
                fontColor: "white",
            }

          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
                fontColor: "white",
            }
          }]
        }
      }
});

var parties_sentiment = document.getElementById('parties_sentiment');

var parties_sentiment_chart = new Chart(parties_sentiment, {
    type: 'bar',
    data: {
        labels: ['SIU', 'IA', 'ALT', 'RV', 'SP', 'UFG', 'V', 'NB', 'KF', 'S', 'JF', 'SF', 'DF', 'LA', 'EL'],
        datasets: [{
            label: 'sentiment score',
            backgroundColor: ['rgba(239,242,241,0.6)', 'rgba(239,242,241,0.6)', 'rgba(0,255,0,0.6)', 'rgba(254,0,148,0.6)', 'rgba(78,122,161,0.6)', 'rgba(24,169,153,0.6)', 'rgba(0,40,131,0.6)', 'rgba(1,80,95,0.6)', 'rgba(0,88,60,0.6)', 'rgba(201,0,44,0.6)', 'rgba(239,242,241,0.6)', 'rgba(196,22,28,0.6)', 'rgba(206,47,53,0.6)', 'rgba(18,33,63,0.6)', 'rgba(199,48,81,0.6)'],
            data: [63.41, 49.06, 45.01, 43.39, 42.7, 38.48, 37.71, 37.7, 37.32, 36.96, 36.49, 33.99, 33.48, 28.73, 28.04]
        }]
    },
    options: {
        legend: {
            display: false
        },
        responsive: true,
        title: {
          display: true,
          text: 'Sentiment analysis',
          fontColor: 'rgba(255, 255, 255, 1)',
          fontSize: '18'
        },
        scales: {
          xAxes: [{
            display: true,
            
            gridLines: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)',
            },
            scaleLabel: {
                display: true,
                labelString: 'Parti',
                fontColor: 'rgba(255, 255, 255, 1)'
            },
            ticks: {
                fontColor: "white",
            }

          }],
          yAxes: [{
            display: true,
            gridLines: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
                fontColor: "white",
            }
          }]
        }
      }
});