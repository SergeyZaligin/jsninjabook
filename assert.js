function assert (value, desc) {

	var li = document.createElement('li');
	li.className = value ? 'pass' : 'fail';
	li.appendChild(document.createTextNode(desc));
	document.getElementById('result').appendChild(li);
}

window.onload = function () {
	assert(true, 'The test suite running');
	assert(false, 'Fail!!!');
};