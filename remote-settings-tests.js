// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by remote-settings.js.
import { name as packageName } from "meteor/kingjuli:remote-settings";

// Write your tests here!
// Here is an example.
Tinytest.add('remote-settings - example', function (test) {
  test.equal(packageName, "remote-settings");
});
