define(["models/todo", "collections/todos", "views/todo", "backbone"], function(TodoModel, TodoCollection, TodoView) {
	/**
	 * Todoリストを表示するためのView
	 *
	 * @class TodoListView
	 */
	var TodoListView = Backbone.View.extend({

		// このViewで管理する要素を指定する。
		el: "#todoListView",

		// イベントの関連付け。
		// "el"で指定した要素内に対して行う。
		events: {
			// clickイベントを設定
			"click button#addTodo": "addTodo"
		},

		// インスタンス生成時に実行
		initialize: function() {
			console.log("[View]TodoListView::initialize()");

			// Collectionのインスタンスを生成
			this.collection = new TodoCollection();

			// collectionに対し、addイベントが発生したらrenderを実行するよう設定
			this.collection.on("add", this.render);

			$("#addTodo").show();
		},

		// レンダリング
		render: function(todo) {
			console.log("[View]TodoListView::render()");

			// １つのTodoを表すViewのインスタンスを生成
			var view = new TodoView({
				model: todo
			});

			$("#todoList", this.el).append(view.render().el);
		},

		// 「登録」ボタンがクリックされた時に実行
		addTodo: function() {
			var todo, input;

			console.log("[View]TodoListView::addTodo()");

			// modelのインスタンスを生成
			todo = new TodoModel();

			// バリデーション失敗時に"invalid"イベントが発生したらonErrorを実行するよう設定
			// v0.9.10では"error"ではなく"invalid"イベントが本体で設定されています。
			todo.on("invalid", this.onInvalid);

			input = $("#inputTodo");

			// 入力された内容をmodelにセット
			// {options}の指定でvalidateを有効に設定
			todo.set({
				content: input.val()
			}, {
				validate: true
			});

			console.log('[Model]TodoListModel::isValid()');
			if(todo.isValid()) {
				// collectionにmodelを追加
				this.collection.add(todo);
			}

			// 入力内容をリセット
			input.val('');

			console.log("--End--");
		},

		// バリデーションエラー
		onInvalid: function(model) {
			console.log('[View]TodoListView::onInvalid()');
			alert(model.validationError);
		}
	});

	// モジュールのViewを返す
	console.log(TodoListView);

	return TodoListView;
});