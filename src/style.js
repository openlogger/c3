c3_chart_internal_fn.generateStyle = function () {
    var $$ = this, config = $$.config,
        styles = config.data_styles,
        callback = config.data_style;

    return function (d) {
        var id = d.id || (d.data && d.data.id) || d, style;

        // if callback function is provided
        if (styles[id] instanceof Function) {
            style = styles[id](d);
        }
        // if specified, choose that style
        else if (styles[id]) {
            style = styles[id];
        }
        // if not specified, set to null
        else {
            style = null;
        }
        return callback instanceof Function ? callback(style, d) : style;
    };
};
