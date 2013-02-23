define(["models/todo", "backbone"], function(TodoModel) {
	/**
	 * TodoのCollection
	 * Todoの集合を表すため、Backbone.Collectionを継承
	 *
	 * @class TodoCollection
	 */
	var TodoCollection = Backbone.Collection.extend({
		// 依存関係で指定したTodoのModelを指定
		model: TodoModel
	});

	// モジュールのCollectionを返す
	return TodoCollection;
});