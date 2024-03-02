const graphSonata = {
  "nodes": [
    { "atom": "r_iz", "size": 1, "color": "#CCCFCD" }
    , { "atom": "e_y", "size": 1, "color": "#CC6666" }
    , { "atom": "r_i", "size": 1, "color": "#81A2BE" }
    , { "atom": "a3", "size": 1, "color": "#DE935F" }
    , { "atom": "a4", "size": 1, "color": "#F0C674" }
    , { "atom": "a5", "size": 1, "color": "#B5BD68" }
    , { "atom": "a6", "size": 1, "color": "#B5BD68" }
  ],
  "links": [
    { "source": 1, "target": 2, "bond": 1 }
  ]
}
function getGraphSonata(callback) {
  callback(graphSonata);
}