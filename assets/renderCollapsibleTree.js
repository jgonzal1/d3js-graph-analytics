/**
 * @param {JSON} _data
 * @param {number} height 9999
 * @param {number} width 4000
 * @param {number} d_x document.getElementById("dy").value; Before: (width - marginRight - marginLeft) / (1 + root.height);
 */
function renderCollapsibleTree(_data, height, width, d_x) {
  // Specify the chart’s dimensions.
  const marginTop = 10;
  // const marginRight = 5;
  const marginBottom = 10;
  const marginLeft = 10;

  //@ts-ignore Rows are separated by d_y pixels, columns by d_x pixels. These names can be counter-intuitive
  // (d_y is a height, and d_x a width). This because the tree must be viewed with the root at the
  // “bottom”, in the data domain. The width of a column is based on the tree’s height.
  const root = d3.hierarchy(_data, function (d) {
    if (d && typeof d == "object") {
      return Object.keys(d).map(k => { return d[k]; });
    }
  });
  const d_y = 10;

  //@ts-ignore Define the tree layout and the shape for links.
  const tree = d3.tree().nodeSize([d_y, d_x]);
  //@ts-ignore
  const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

  //@ts-ignore Create the SVG container, a layer for the links and a layer for the nodes.
  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", d_y)
    .attr("viewBox", [-marginLeft, -marginTop, width, d_y])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;");

  const gLink = svg.append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5);

  const gNode = svg.append("g")
    .attr("cursor", "pointer")
    .attr("pointer-events", "all");

  function update(event, source) {
    const duration = event?.altKey ? 2500 : 250; // hold the alt key to slow down the transition
    const nodes = root.descendants().reverse();
    const links = root.links();

    // Compute the new tree layout.
    tree(root);

    let left = root;
    let right = root;
    root.eachBefore(node => {
      if (node.x < left.x) left = node;
      if (node.x > right.x) right = node;
    });

    const height = right.x - left.x + marginTop + marginBottom;

    const transition = svg.transition()
      .duration(duration)
      .attr("height", height)
      .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
      .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

    // Update the nodes…
    const node = gNode.selectAll("g")
      .data(nodes, d => d.id);

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append("g")
      .attr("transform", d => source && `translate(${source.y0},${source.x0})`)
      .attr("fill-opacity", 0)
      .attr("stroke-opacity", 0)
      .on("click", (event, d) => {
        d.children = d.children ? null : d._children;
        update(event, d);
      });

    nodeEnter.append("circle")
      .attr("r", 2.5)
      .attr("fill", d => d._children ? "#555" : "#999")
      .attr("stroke-width", 10);

    nodeEnter.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d._children ? -6 : 6)
      .attr("text-anchor", d => d._children ? "end" : "start")
      .text(d => {
        if (d.data && typeof (d.data) === "string") {
          return d.data;
        }
        return;
      })
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .attr("stroke", "white")
      .attr("paint-order", "stroke");

    // Transition nodes to their new position.
    const nodeUpdate = node.merge(nodeEnter).transition(transition)
      .attr("transform", d => `translate(${d.y},${d.x})`)
      .attr("fill-opacity", 1)
      .attr("stroke-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition(transition).remove()
      .attr("transform", d => `translate(${source.y},${source.x})`)
      .attr("fill-opacity", 0)
      .attr("stroke-opacity", 0);

    // Update the links…
    const link = gLink.selectAll("path")
      .data(links, d => d.target.id);

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().append("path")
      .attr("d", d => {
        if (source) {
          const o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        }
        return;
      });

    // Transition links to their new position.
    link.merge(linkEnter).transition(transition)
      .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition(transition).remove()
      .attr("d", d => {
        const o = { x: source.x, y: source.y };
        return diagonal({ source: o, target: o });
      });

    // Stash the old positions for transition.
    root.eachBefore(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Do the first update to the initial configuration of the tree — where a number of nodes
  // are open (arbitrarily selected as the root, plus nodes with 7 letters).
  root.x0 = d_x / 2;
  root.y0 = 0;
  root.descendants().forEach((d, i) => {
    d.id = i;
    d._children = d.children;
    if (d && d.depth && (d?.data?.name?.length ?? 0) !== 7) {
      d.children = null
    }
  });

  update(null, root);

  function expand(d) {
    if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    var children = (d.children) ? d.children : d._children;
    if (children)
      children.forEach(expand);
  }
  function expandAll() {
    expand(root);
    update(root);
  }
  expandAll()

  return Object.assign(svg.node());
}