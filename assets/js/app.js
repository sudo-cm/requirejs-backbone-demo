requirejs.config({
	// 読み込みのベースUrlを設定する。
	baseUrl: "assets/js",

	// pathsオプションの設定。"module/name": "path"を指定します。拡張子（.js）は指定しない。
	paths: {
		"jquery": "libs/jquery-1.8.3.min",
		"underscore": "libs/underscore-min",
		"backbone": "libs/backbone-min"
	},

	// shimオプションの設定。モジュール間の依存関係を定義。
	shim: {
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		}
	}
});

// require(["module/name", ...], function(params){ ... });
require(["views/todos", "backbone"], function(TodoListView) {

	console.dir("--Start--");

	// 最初にTodoリストのViewインスタンスを生成
	var app = new TodoListView();
});