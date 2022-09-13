function growCorn(cornId) {
    console.log('here');
    var cornElement = document.getElementById('corn' + cornId);
    cornElement.appendChild(document.createTextNode(
        "|"
    ));
    cornElement.appendChild(document.createElement('br'));
}