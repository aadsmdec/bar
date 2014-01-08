/**
 * @module ./foo.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Foo
 * @extends Component
 */
exports.Foo = Component.specialize(/** @lends Foo# */ {
    constructor: {
        value: function Foo() {
            this.super();
        }
    }
});
