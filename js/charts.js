var parties_lix = document.getElementById('parties_lix');

var parties_lix_chart = new Chart(parties_lix, {
    type: 'bar',
    data: {
        labels: ['S', 'UFG', 'IA', 'V', 'SF', 'EL', 'RV', 'LA', 'KF', 'DF', 'ALT', 'NB', 'SP', 'SIU', 'JF'],
        datasets: [{
            label: 'lixtal',
            backgroundColor: ['rgba(201,0,44,0.3)', 'rgba(24,169,153,0.3)', 'rgba(239,242,241,0.3)', 'rgba(0,40,131,0.3)', 'rgba(196,22,28,0.3)', 'rgba(199,48,81,0.3)', 'rgba(254,0,148,0.3)', 'rgba(18,33,63,0.3)', 'rgba(0,88,60,0.3)', 'rgba(206,47,53,0.3)', 'rgba(0,255,0,0.3)', 'rgba(1,80,95,0.3)', 'rgba(78,122,161,0.3)', 'rgba(239,242,241,0.3)', 'rgba(239,242,241,0.3)'],
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
                labelString: 'Party',
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
            scaleLabel: {
                display: true,
                labelString: 'Lix score',
                fontColor: 'rgba(255, 255, 255, 1)'
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
            backgroundColor: ['rgba(239,242,241,0.3)', 'rgba(239,242,241,0.3)', 'rgba(0,255,0,0.3)', 'rgba(254,0,148,0.3)', 'rgba(78,122,161,0.3)', 'rgba(24,169,153,0.3)', 'rgba(0,40,131,0.3)', 'rgba(1,80,95,0.3)', 'rgba(0,88,60,0.3)', 'rgba(201,0,44,0.3)', 'rgba(239,242,241,0.3)', 'rgba(196,22,28,0.3)', 'rgba(206,47,53,0.3)', 'rgba(18,33,63,0.3)', 'rgba(199,48,81,0.3)'],
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
                labelString: 'Party',
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
            scaleLabel: {
                display: true,
                labelString: 'Lix score',
                fontColor: 'rgba(255, 255, 255, 1)'
            },
            ticks: {
                fontColor: "white",
            }
          }]
        }
      }
});

var politicians_scatter = document.getElementById('politicians_scatter');

var politicians_scatter_chart = new Chart(politicians_scatter, {
    type: 'scatter',
    data: {
        labels: ['Henrik Dahl', 'Morten Messerschmidt', 'Rosa Lund', 'Sikandar Siddique', 'Benny Engelbrecht', 'Jens Rohde', 'Bent Bøgsted', 'Henning Hyllested', 'Pernille Vermund', 'Simon Emil Ammitzbøll-Bille', 'Jette Gottlieb', 'Ole Birk Olesen', 'Rasmus Stoklund', 'Karsten Hønge', 'Carl Valentin', 'Jeppe Bruus', 'Peter Hummelgaard', 'Halime Oguz', 'Nils Sjøberg', 'Marcus Knuth', 'Samira Nawa', 'Rasmus Nordqvist', 'Mette Thiesen', 'Karina Lorentzen Dehnhardt', 'Morten Bødskov', 'Torsten Gejl', 'Zenia Stampe', 'Jeppe Kofod', 'Anders Kronborg', 'Peter Skaarup', 'Jakob Sølvhøj', 'Alex Vanopslagh', 'Hans Kristian Skibby', 'Kathrine Olldag', 'Andreas Steenberg', 'Christian Juhl', 'Morten Dahlin', 'Katrine Robsøe', 'Katarina Ammitzbøll', 'Karsten Lauritzen', 'Rune Lund', 'Martin Geertsen', 'Peder Hvelplund', 'Leif Lahn Jensen', 'Anne Valentina Berthelsen', 'Mette Abildgaard', 'Louise Schack Elholm', 'Mona Juul', 'Orla Østerby', 'Jesper Petersen', 'Victoria Velasquez', 'Simon Kollerup', 'Pia Kjærsgaard', 'Nick Hækkerup', 'Hans Andersen', 'Naser Khader', 'Lars Boje Mathiesen', 'Karina Adsbøl', 'Camilla Fabricius', 'Dennis Flydtkjær', 'Inger Støjberg', 'Jan E. Jørgensen', 'Peter Hummelgaard Thomsen', 'Birgitte Vind', 'Bertel Haarder', 'Michael Aastrup Jensen', 'Bjørn Brandenborg', 'Ellen Trane Nørby', 'Mai Villadsen', 'Rasmus Prehn', 'Bjarne Laustsen', 'Martin Lidegaard', 'Mogens Jensen', 'Troels Lund Poulsen', 'Jens Joel', 'Niels Flemming Hansen', 'Orla Hav', 'Theresa Berg Andersen', 'Jens Henrik Thulesen Dahl', 'Jacob Mark', 'Søren Søndergaard', 'Marie Bjerre', 'Ulla Tørnæs', 'Jacob Jensen', 'Søren Espersen', 'Uffe Elbæk', 'Lisbeth Bech-Nielsen', 'Sofie Carsten Nielsen', 'Signe Munk', 'Hanne Bjørn-Klausen', 'Dan Jørgensen', 'Anne Paulin', 'Pernille Bendixen', 'Kristian Pihl Lorentzen', 'Pernille Skipper', 'Anna Brændemose', 'Stén Knuth', 'Birgitte Bergman', 'Peter Seier Christensen', 'René Christensen', 'Pernille Rosenkrantz-Theil', 'Nicolai Wammen', 'Rasmus Jarlov', 'Carsten Kissmeyer', 'Susanne Zimmer', 'Henrik Møller', 'Stinus Lindgreen', 'Kaare Dybvad Bek', 'Thomas Jensen', 'Kristian Hegaard', 'Hans Christian Schmidt', 'Eva Flyvholm', 'Mattias Tesfaye', 'Marianne Jelved', 'Mai Mercado', 'Astrid Carøe', 'Kasper Sand Kjær', 'Christian Rabjerg Madsen', 'Tommy Ahlers', 'Kristian Thulesen Dahl', 'Lennart Damsbo-Andersen', 'Rasmus Helveg Petersen', 'Astrid Krag', 'Anne Honoré Østergaard', 'Ane Halsboe-Jørgensen', 'Preben Bang Henriksen', 'Annette Lind', 'Liselott Blixt', 'Jakob Ellemann-Jensen', 'Lisbeth Bech Poulsen', 'Marlene Ambo-Rasmussen', 'Tanja Larsson', 'Joy Mogensen', 'Marie Krarup', 'Lars Aslan Rasmussen', 'Søren Egge Rasmussen', 'Anne Sophie Callesen', 'Lotte Rod', 'Malte Larsen', 'Torsten Schack Pedersen', 'Anni Matthiesen', 'Sjúrður Skaale', 'Per Larsen', 'Christoffer Aagaard Melson', 'Mette Hjermind Dencker', 'Charlotte Broman Mølbæk', 'Mira Issa Bloch', 'Britt Bager', 'Jane Heitmann', 'Mette Gjerskov', 'Rasmus Horn Langhoff', 'Kirsten Normann Andersen', 'Fatma Øktem', 'Julie Skovsby', 'Balder Mørk Andersen', 'Carsten Kudsk', 'Alex Ahrendtsen', 'Mads Fuglede', 'Christian Langballe', 'Lise Bech', 'Erling Bonnesen', 'Flemming Møller Mortensen', 'Karen Ellemann', 'Sophie Løhde', 'Pause Pause', 'Aaja Chemnitz Larsen', 'Kasper Roug', 'Aki-Matilda Høegh-Dam', 'Ruben Kidde', 'Brigitte Klintskov Jerkel', 'Mette Frederiksen', 'Kristian Jensen', 'Troels Ravn', 'Lea Wermelin', 'Anders G. Christensen', 'Heidi Bank', 'Kaare Dybvad', 'Edmund Joensen', 'Magnus Heunicke', 'Morten Østergaard', 'Søren Pape Poulsen', 'Ida Auken', 'Ina Strøjer-Schmidt', 'Pia Olsen Dyhr', 'Thomas Danielsen', 'Kim Valentin', 'Daniel Toft Jakobsen', 'Trine Torp', 'Trine Bramsen', 'Gitte Willumsen', 'Peter Juel-Jensen', 'Dorthe Hindborg', 'Lars Christian Lilleholt', 'Eva Kjer Hansen', 'Jan Johansen', 'Susanne Eilersen', 'Egil Hulgaard'],
        datasets: [{
            label: 'Scatter Dataset',
            data: [{'x': 84, 'y': 40}, {'x': 68, 'y': 64}, {'x': 54, 'y': 19}, {'x': 41, 'y': 18}, {'x': 40, 'y': 0}, {'x': 38, 'y': 16}, {'x': 37, 'y': 15}, {'x': 30, 'y': 19}, {'x': 28, 'y': 44}, {'x': 27, 'y': 0}, {'x': 25, 'y': 8}, {'x': 25, 'y': 55}, {'x': 21, 'y': 11}, {'x': 20, 'y': 20}, {'x': 20, 'y': 5}, {'x': 18, 'y': 11}, {'x': 18, 'y': 5}, {'x': 18, 'y': 1}, {'x': 18, 'y': 0}, {'x': 17, 'y': 25}, {'x': 17, 'y': 2}, {'x': 17, 'y': 16}, {'x': 17, 'y': 34}, {'x': 16, 'y': 12}, {'x': 16, 'y': 0}, {'x': 16, 'y': 7}, {'x': 15, 'y': 12}, {'x': 14, 'y': 0}, {'x': 14, 'y': 2}, {'x': 14, 'y': 9}, {'x': 13, 'y': 6}, {'x': 13, 'y': 8}, {'x': 13, 'y': 8}, {'x': 12, 'y': 0}, {'x': 12, 'y': 3}, {'x': 12, 'y': 24}, {'x': 12, 'y': 9}, {'x': 12, 'y': 2}, {'x': 12, 'y': 3}, {'x': 12, 'y': 11}, {'x': 11, 'y': 17}, {'x': 11, 'y': 4}, {'x': 10, 'y': 13}, {'x': 10, 'y': 7}, {'x': 10, 'y': 0}, {'x': 10, 'y': 6}, {'x': 9, 'y': 6}, {'x': 9, 'y': 6}, {'x': 9, 'y': 3}, {'x': 8, 'y': 4}, {'x': 8, 'y': 9}, {'x': 8, 'y': 0}, {'x': 8, 'y': 18}, {'x': 7, 'y': 2}, {'x': 7, 'y': 7}, {'x': 7, 'y': 11}, {'x': 7, 'y': 42}, {'x': 7, 'y': 22}, {'x': 7, 'y': 0}, {'x': 7, 'y': 13}, {'x': 7, 'y': 9}, {'x': 7, 'y': 0}, {'x': 7, 'y': 0}, {'x': 7, 'y': 1}, {'x': 7, 'y': 2}, {'x': 6, 'y': 7}, {'x': 6, 'y': 7}, {'x': 6, 'y': 8}, {'x': 6, 'y': 8}, {'x': 6, 'y': 0}, {'x': 5, 'y': 3}, {'x': 5, 'y': 10}, {'x': 5, 'y': 0}, {'x': 5, 'y': 3}, {'x': 5, 'y': 4}, {'x': 5, 'y': 6}, {'x': 5, 'y': 4}, {'x': 5, 'y': 1}, {'x': 5, 'y': 12}, {'x': 5, 'y': 18}, {'x': 5, 'y': 8}, {'x': 5, 'y': 4}, {'x': 5, 'y': 8}, {'x': 5, 'y': 1}, {'x': 4, 'y': 7}, {'x': 4, 'y': 21}, {'x': 4, 'y': 0}, {'x': 4, 'y': 10}, {'x': 4, 'y': 5}, {'x': 4, 'y': 0}, {'x': 4, 'y': 0}, {'x': 4, 'y': 1}, {'x': 4, 'y': 0}, {'x': 4, 'y': 3}, {'x': 4, 'y': 12}, {'x': 4, 'y': 0}, {'x': 4, 'y': 3}, {'x': 3, 'y': 6}, {'x': 3, 'y': 3}, {'x': 3, 'y': 6}, {'x': 3, 'y': 0}, {'x': 3, 'y': 0}, {'x': 3, 'y': 22}, {'x': 3, 'y': 2}, {'x': 3, 'y': 11}, {'x': 3, 'y': 3}, {'x': 3, 'y': 3}, {'x': 3, 'y': 0}, {'x': 3, 'y': 10}, {'x': 2, 'y': 7}, {'x': 2, 'y': 18}, {'x': 2, 'y': 14}, {'x': 2, 'y': 3}, {'x': 2, 'y': 11}, {'x': 2, 'y': 4}, {'x': 2, 'y': 2}, {'x': 2, 'y': 1}, {'x': 2, 'y': 0}, {'x': 2, 'y': 1}, {'x': 2, 'y': 12}, {'x': 2, 'y': 0}, {'x': 2, 'y': 0}, {'x': 2, 'y': 2}, {'x': 2, 'y': 2}, {'x': 2, 'y': 0}, {'x': 2, 'y': 1}, {'x': 2, 'y': 1}, {'x': 2, 'y': 17}, {'x': 2, 'y': 0}, {'x': 2, 'y': 0}, {'x': 2, 'y': 0}, {'x': 2, 'y': 0}, {'x': 2, 'y': 1}, {'x': 1, 'y': 17}, {'x': 1, 'y': 2}, {'x': 1, 'y': 17}, {'x': 1, 'y': 2}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 7}, {'x': 1, 'y': 0}, {'x': 1, 'y': 13}, {'x': 1, 'y': 2}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 1}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 15}, {'x': 1, 'y': 1}, {'x': 1, 'y': 11}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 0}, {'x': 1, 'y': 2}, {'x': 0, 'y': 6}, {'x': 0, 'y': 3}, {'x': 0, 'y': 2}, {'x': 0, 'y': 11}, {'x': 0, 'y': 0}, {'x': 0, 'y': 5}, {'x': 0, 'y': 7}, {'x': 0, 'y': 0}, {'x': 0, 'y': 9}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 0, 'y': 1}, {'x': 0, 'y': 14}, {'x': 0, 'y': 0}, {'x': 0, 'y': 3}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 0, 'y': 0}, {'x': 0, 'y': 9}, {'x': 0, 'y': 0}, {'x': 0, 'y': 15}, {'x': 0, 'y': 18}, {'x': 0, 'y': 6}, {'x': 0, 'y': 0}, {'x': 0, 'y': 9}, {'x': 0, 'y': 3}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 1}, {'x': 0, 'y': 5}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 3}, {'x': 0, 'y': 0}, {'x': 0, 'y': 0}, {'x': 0, 'y': 2}],
            pointBorderColor: 'rgba(255,255,255,0.8)',
        }],
    },
    options: {
        tooltips: {
            callbacks: {
               label: function(tooltipItem, data) {
                  var label = data.labels[tooltipItem.index];
                  return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
               }
            }
         },
        legend: {
            display: false
        },
        responsive: true,
        title: {
          display: true,
          text: 'Scatter plot of number of mentions',
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
                labelString: 'Outgoing mentions',
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
            scaleLabel: {
                display: true,
                labelString: 'Ingoing mentions',
                fontColor: 'rgba(255, 255, 255, 1)'
            },
            ticks: {
                fontColor: "white",
            }
          }]
        }
    }
});

var politicians_outgoing_mentions = document.getElementById('politicians_outgoing_mentions');

var politicians_outgoing_mentions = new Chart(politicians_outgoing_mentions, {
    type: 'bar',
    data: {
        labels: ['Henrik Dahl', 'Morten Messerschmidt', 'Rosa Lund', 'Sikandar Siddique', 'Benny Engelbrecht', 'Jens Rohde', 'Bent Bøgsted', 'Henning Hyllested', 'Pernille Vermund', 'Simon Emil Ammitzbøll-Bille', 'Jette Gottlieb', 'Ole Birk Olesen', 'Rasmus Stoklund', 'Karsten Hønge', 'Carl Valentin', 'Jeppe Bruus', 'Peter Hummelgaard', 'Halime Oguz', 'Nils Sjøberg', 'Marcus Knuth'],
        datasets: [{
            label: 'Outgoing mentions',
            backgroundColor: ['rgba(18,33,63,0.3)', 'rgba(206,47,53,0.3)', 'rgba(199,48,81,0.3)', 'rgba(24,169,153,0.3)', 'rgba(201,0,44,0.3)', 'rgba(254,0,148,0.3)', 'rgba(206,47,53,0.3)', 'rgba(199,48,81,0.3)', 'rgba(1,80,95,0.3)', 'rgba(24,169,153,0.3)', 'rgba(199,48,81,0.3)', 'rgba(18,33,63,0.3)', 'rgba(201,0,44,0.3)', 'rgba(196,22,28,0.3)', 'rgba(196,22,28,0.3)', 'rgba(201,0,44,0.3)', 'rgba(201,0,44,0.3)', 'rgba(196,22,28,0.3)', 'rgba(254,0,148,0.3)', 'rgba(0,88,60,0.3)'],
            data: [84, 68, 54, 41, 40, 38, 37, 30, 28, 27, 25, 25, 21, 20, 20, 18, 18, 18, 18, 17]
        }]
    },
    options: {
        legend: {
            display: false
        },
        responsive: true,
        title: {
          display: true,
          text: 'Most outgoing mentions',
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
                labelString: 'Politician',
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
            scaleLabel: {
                display: true,
                labelString: 'Mentions',
                fontColor: 'rgba(255, 255, 255, 1)'
            },
            ticks: {
                fontColor: "white",
            }
          }]
        }
      }
});

var politicians_ingoing_mentions = document.getElementById('politicians_ingoing_mentions');

var politicians_ingoing_mentions = new Chart(politicians_ingoing_mentions, {
    type: 'bar',
    data: {
        labels: ['Morten Messerschmidt', 'Ole Birk Olesen', 'Pernille Vermund', 'Lars Boje Mathiesen', 'Henrik Dahl', 'Mette Thiesen', 'Marcus Knuth', 'Christian Juhl', 'Karina Adsbøl', 'Rasmus Jarlov', 'Uffe Elbæk', 'Karsten Hønge', 'Rosa Lund', 'Henning Hyllested', 'Sikandar Siddique', 'Pia Kjærsgaard', 'Jacob Mark', 'Hans Christian Schmidt', 'Søren Pape Poulsen', 'Rune Lund'],
        datasets: [{
            label: 'Ingoing mentions',
            backgroundColor: ['rgba(206,47,53,0.3)', 'rgba(18,33,63,0.3)', 'rgba(1,80,95,0.3)', 'rgba(1,80,95,0.3)', 'rgba(18,33,63,0.3)', 'rgba(1,80,95,0.3)', 'rgba(0,88,60,0.3)', 'rgba(199,48,81,0.3)', 'rgba(206,47,53,0.3)', 'rgba(0,88,60,0.3)', 'rgba(24,169,153,0.3)', 'rgba(196,22,28,0.3)', 'rgba(199,48,81,0.3)', 'rgba(199,48,81,0.3)', 'rgba(24,169,153,0.3)', 'rgba(206,47,53,0.3)', 'rgba(196,22,28,0.3)', 'rgba(0,40,131,0.3)', 'rgba(0,88,60,0.3)', 'rgba(199,48,81,0.3)'],
            data: [64, 55, 44, 42, 40, 34, 25, 24, 22, 22, 21, 20, 19, 19, 18, 18, 18, 18, 18, 17]
        }]
    },
    options: {
        legend: {
            display: false
        },
        responsive: true,
        title: {
          display: true,
          text: 'Most ingoing mentions',
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
                labelString: 'Politician',
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
            scaleLabel: {
                display: true,
                labelString: 'Mentions',
                fontColor: 'rgba(255, 255, 255, 1)'
            },
            ticks: {
                fontColor: "white",
            }
          }]
        }
      }
});