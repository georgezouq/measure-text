'use strict';

var defaultStyle = `
  position: absolute;
  visibility: hidden;
  height: auto;
  width: auto;
  white-space: nowrap; /* Thanks to Herb Caudill comment */
`;

/**
 * Measure Text
 *
 * @param text the text to measure
 * @param customStyle style string of text wrapper
 * @param className text wrapper class name
 * @param tag tag of element text wrapper
 */
function measure(text, customStyle = null, className = null, tag = "span") {
  var fontSize = 12;
  var $span = document.createElement(tag)
  var style = defaultStyle;

  if (style) {
    style += customStyle;
  }

  if (className) {
    $span.setAttribute("class", defaultStyle);
  }

  $span.setAttribute("style", defaultStyle);
  $span.innerHTML = text;
  document.body.appendChild($span);

  var height = $span.clientHeight + 1;
  var width = $span.clientWidth + 1;

  document.body.removeChild($span);
  return { width, height }
}
