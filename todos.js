Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
 // Template Helpers
 Template.main.helpers({
  todos: function(){
    return Todos.find({},{sort: {createdAt: -1}});
  }
 });


Template.main.events({
	'submit .new-todo': function(event){

			var text = event.target.text.value;
			Todos.insert({
				text: text,
				createdAt: new Date()
			});
			return false;


			event.target.text = '';
	}



	'click .toggle-checked': function(){
		
			Todos.update(this._id, {$set:{checked: ! this.checked}});

			}
 });
}

if (Meteor.isServer) {
 
}
