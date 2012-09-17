module.exports = function(o) {
    if(!o || !'bin' in o) o = { bin: 'php' };

    return function(fn, opts, cb) {
        require("child_process").exec(o.bin + ' ' + fn, function(e, so, sr) {
            cb(e || sr, so);
        })
    }
}