var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 1500 - margin.right - margin.left,
    height = 2000 - margin.top - margin.bottom,
    startHeight = 600, // starts smaller
    treeHeight = startHeight; // tree will grow when depth > 1 and treeHeight is less than height

var i = 0,
    duration = 750,
    root;

var tree = d3.layout.tree()
    .size([treeHeight, width]);

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; }); // x and y are flipped, why?

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.json("js-diagram.json", function(error, javascript) {
d3.json("js-diagram_2.json", function(error, javascript) {
  if (error) throw error;

  root = javascript;
  root.x0 = height / 2; // put root node in the center
  root.y0 = 0;

  // recursively collapses each set of children
  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  root.children.forEach(collapse);
  update(root);
});

d3.select(self.frameElement).style("height", "800px"); // use to make it work in iframe

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) {
    d.y = d.depth * 320;
//used to be here
   });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) {
        return d.id || (d.id = ++i);
      });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "brown" : "orange"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", function(d) { return d._children ? 4 : 4; })
      .style("fill", function(d) { return d._children ? "orange" : "#fff"; })

  nodeUpdate.select("text")
      .style("fill-opacity", .5)

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
// switches the off nodes to on and vice versa, does nothing if no children
function click(d) {
  if (d.children) {
    if (d.depth > 1 && treeHeight > startHeight) { // conditions for tree shrinking
      treeHeight -= (d.children.length * 10)
      tree.size([treeHeight, width])
    }
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    if (d.depth > 1 && treeHeight < height) { // conditions for tree growth
      treeHeight += (d._children.length * 10)
      tree.size([treeHeight, width])
    }
    d._children = null;
  }
  update(d);
  }
