/**
 * @module ui/baz.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Baz
 * @extends Component
 */
exports.Baz = Component.specialize(/** @lends Baz# */ {
    constructor: {
        value: function Baz() {
            this.super();
        }
    }
});
