/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    handleClearCompletedButtonAction: {
        value: function () {
            var completedTasks = this.templateObjects.tasksController.getPath("content.filter{completed});
			console.log("completed", completedTasks);
        }
    }
});
