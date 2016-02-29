var $ = require('jquery');
var Baobab = require('baobab');
var ReactDOM = require('react-dom');
var React = require('react');
var mixins = require('baobab-react/mixins');

var AppState = require('./AppState');

var Child = React.createClass({

	mixins: [mixins.branch],

	cursors: {
		name: ['name']
	},

	render: function() {
		console.log("Child.render()");
		return (<span>Hello {this.state.name}, I''m from child</span>);
	}
});

var Test = React.createClass({
	
	mixins: [mixins.root],

	render: function() {
		console.log("Test.render()");
		return (<Child/>);
	}
});

var renderApp = function() {
	var root = (<Test tree={AppState}/>);
	console.log(root);
	ReactDOM.render(root, document.querySelector('#content'));
};

$(window).load( function() {
	console.log("window.load()");
	renderApp();

});
