

var converter = new showdown.Converter();
converter.setFlavor('github');
converter.setOption('ghCodeBlocks', true);

fetch('https://raw.githubusercontent.com/erasabi/trekthroughs/master/pen_testing/RickdiculouslyEasy.md')
 .then(response => response.text())
 .then(result => document.getElementById('content').innerHTML =
   converter.makeHtml(result));
