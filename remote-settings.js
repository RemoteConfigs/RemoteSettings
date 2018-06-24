// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See remote-settings-tests.js for an example of importing.
export const name = 'remote-settings';
import { RemoteConfigs } from 'meteor/kingjuli:remote-configs';

export const RemoteSettings =  {
	get : (name, theDefault = '') => {
		//@ToDo add before get Hook
		RemoteConfigs.Hooks.Events.run("before-get-remote-settings", name);
		check(name, String);
		check(theDefault, String);		
		console.log(name, theDefault);
		if ( typeof Settings == "object" && Settings.constructor == Mongo.Collection ) {
			var setting = Settings.findOne({_id : name, type : 'remote-setting'});
			return setting && setting.value || theDefault;
		}
		else {
			throw 'The package is not configured correctly. Kindly contact admin for details.'
		}
		
		//@ToDo add after get Hook
		RemoteConfigs.Hooks.Events.run("after-get-remote-settings", name);

	},
	set : (name, value, success, fail) => {
		//@ToDo add before get Hook
		console.log(name, value);
		if ( typeof Settings == "object" && Settings.constructor == Mongo.Collection ) {
			var setting = Settings.upsert(
				{ _id : name }, 
				{ value : value, type : 'remote-setting' },
				function(err,data){
					if(err && fail) {
						fail(err);
					}
					if(data && success) {
						success(data);
					}
				});
		}
		else {
			error('The package is not configured correctly. Kindly contact admin for details.');
		}

		//@ToDo add after get Hook
	},
	name : name
};




