define(["backbone"], function() {
	/**
	 * Todoを表示するためのView
	 *
	 * @class TodoView
	 */
	var TodoView = Backbone.View.extend({
		// レンダリングの際に自動で挿入されるタグ（デフォルトは<div>）
		tagName: "li",

		// イベントの登録
		events: {},

		// インスタンス生成時に実行
		initialize: function() {
			console.log("[View]TodoView::initialize()");
		},

		// レンダリング
		render: function() {
			// この時点ではまだ画面には描画されない。
			$(this.el).html(this.model.get("content"));

			// 呼び出し元でメソッドチェーンが使えるようにthisを返す。
			return this;
		}
	});

	// モジュールのViewを返す。
	return TodoView;
});