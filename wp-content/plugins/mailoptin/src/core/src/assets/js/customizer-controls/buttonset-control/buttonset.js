wp.customize.MailOptinButtonSet = wp.customize.controlConstructor["mailoptin-buttonset"] = wp.customize.Control.extend({
    ready: function () {
        "use strict";
        var t = this;
        this.container.on("click", "input", function () {
            t.setting.set(jQuery(this).val())
        })
    }
});