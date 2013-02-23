define(["backbone"], function() {
	/**
	 * TodoのModel
	 * Backbone.Modelを継承
	 *
	 * @class TodoModel
	 */
	var TodoModel = Backbone.Model.extend({

		// 初期値の設定
		defaults: {},

		// インスタンス生成時に実行
		initialize: function() {
			console.dir("[Model]TodoModel::initialize()");
		},

		// バリデーションを定義
		validate: function(attrs) {
			console.dir("[Model]TodoModel::validate()");
			var ret = "";

			if(_.isEmpty(attrs.content)) {
				ret = "入力してください。";
			}

			return ret;
		}
	});

	// モジュールのModelを返す
	return TodoModel;
});