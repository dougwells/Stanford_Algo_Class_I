"use strict"

var fs = require('fs');
fs.readFile('./Tests/Week5/dijkstraData.txt', function(err, data) {
    if(err) {console.log("ERROR:", err);}
    // var str = "12,345,678";
    // str = str.replace(/,/g, "");
    // parseInt(str);
    var bigStringArray = data.toString().replace(/,/g,"").split(" ");
    var bigNumberArray = bigStringArray.map(parseInt);
    // bigNumArray.pop();
    console.log("Data ready", bigStringArray);

var simpleGraph = [
[0, 2, 4, 0, 0, 0],   // node A
[0, 0, 2, 4, 2, 0],   // node B
[0, 0, 0, 0, 3, 0],   // node C
[0, 0, 0, 0, 0, 2],   // node D
[0, 0, 0, 3, 0, 2],   // node E
[0, 0, 0, 0, 0, 0]];  // node F

function ShortestPath(graph) {

this.graph = graph;

var INF = 1000000;


this.dijkstra = function(src){

    var dist = [],
        visited = [],
        length = this.graph.length;

    for (var i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }

    dist[src] = 0;

    for (var i = 0; i < length-1; i++){

        var u = minDistance(dist, visited);

        visited[u] = true;

        for (var v = 0; v < length; v++){
            if (!visited[v] && this.graph[u][v]!=0 && dist[u] != INF && dist[u]+this.graph[u][v] < dist[v]){
                dist[v] = dist[u] + this.graph[u][v];
            }
        }
    }

    return dist;
};

var minDistance = function(dist, visited){

      var min = INF,
          minIndex = -1;

      for (var v = 0; v < dist.length; v++){
          if (visited[v] == false && dist[v] <= min){
              min = dist[v];
              minIndex = v;
          }
      }

      return minIndex;
  };

}

var testDijkstra = new ShortestPath(simpleGraph);

//Shortest paths from vertex/node ...
  //Note, if no min distance, array value = inf ~= 9007199254740991
console.log("Shortest paths from A",testDijkstra.dijkstra(0)[5]);
console.log("Shortest paths from B", testDijkstra.dijkstra(1));
console.log("Shortest paths from C", testDijkstra.dijkstra(2));
console.log("Shortest paths from F", testDijkstra.dijkstra(6));


  });  // End fs.readFile
