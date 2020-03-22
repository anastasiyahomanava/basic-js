module.exports = function repeater(str, options) {
    let separator = options.separator;
    let repeatTimes = options.repeatTimes;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;

    separator = separator || '+';
    additionSeparator = additionSeparator || '|';
    addition = addition === null ? 'null' : addition;

    let addString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

    let arr = new Array(repeatTimes).fill(str + addString).join(separator);

    return arr;
};
