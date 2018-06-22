// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See remote-settings-tests.js for an example of importing.
export const name = 'remote-settings';

export const remote = remote || {};

remote.settings = {
	get : (name, theDefault = '') => {
		check(name, string);
		check(theDefault, string);
		
		//@ToDo add before get Hook
		console.log(name, theDefault);
		if ( typeof Settings == "object" && Settings.constructor == Mongo.Collection ) {
			var setting = FoodGroups.findOne({_id : name});
			return setting || theDefault;
		}
		else {
			throw 'The package is not cofigured correctly. Kindly contact '
		}
		
		//@ToDo add after get Hook
	},
	set : () => {
		//@ToDo add before get Hook
		console.log(name, theDefault);
		Meteor.
		//@ToDo add after get Hook
	},
	name : () => name
};


