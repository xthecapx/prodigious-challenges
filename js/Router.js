App.Router = Backbone.Router.extend({
	routes: {
		'(index)': 'index',
		'help': 'help',
		'home': 'home',
		'singUp': 'singUp',
		'login': 'login',
		'*path': 'notFound'
	},
	index: function() {
		console.log('index');
		App.Views.patientView.render();
	},
	help: function() {
		console.log('help');
		alert('help');
	},
	home: function () {
		console.log('home');
		alert('home');
	},
	singUp: function() {
		console.log('singUp');
		App.Views.singUpView.render();
	},
	login: function() {
		console.log('login');
		App.Views.loginView.render();
	},
	notFound: function () {
		console.log('not Found');
		alert('not Found');
	},
});