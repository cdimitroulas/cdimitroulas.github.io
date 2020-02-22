function getPageHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight, 
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

(function createLineNumbers () {
  const lineNumbersContainer = document.querySelector('#line-numbers');

  // Create an li and insert it into the DOM to figure out it's height
  const li1 = document.createElement("li");
  li1.appendChild(document.createTextNode("1"));
  lineNumbersContainer.appendChild(li1)

  const lineHeight = li1.offsetHeight;
  const pageHeight = getPageHeight()

  const numberOfLines = pageHeight / lineHeight

  let html = ''
  for (let x = 1; x < numberOfLines; x ++) {
    html = html.concat(`<li>${x}</li>`)
  }
  lineNumbersContainer.innerHTML = html

  lineNumbersContainer.style = 'opacity: 0.4;'
})()

