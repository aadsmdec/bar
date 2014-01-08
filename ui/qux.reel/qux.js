/**
 * @module ui/qux.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Qux
 * @extends Component
 */
exports.Qux = Component.specialize(/** @lends Qux# */ {
    constructor: {
        value: function Qux() {
            this.super();
        }
    }
});
