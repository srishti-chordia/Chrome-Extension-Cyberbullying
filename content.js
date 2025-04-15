function getTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.textContent.trim().length > 20) {
      nodes.push(node);
    }
  }
  return nodes;
}

function highlightText(node, color = "rgba(255, 0, 0, 0.3)") {
  const span = document.createElement("span");
  span.textContent = node.textContent;
  span.style.backgroundColor = color;
  span.style.borderRadius = "4px";
  node.replaceWith(span);
}

async function scanPage() {
  const nodes = getTextNodes();
  const texts = nodes.map(n => n.textContent);

  const response = await fetch("http://localhost:5000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts })
  });

  const results = await response.json();
  results.forEach((res, i) => {
    if (res.is_bullying) {
      highlightText(nodes[i]);
    }
  });
}

scanPage();
