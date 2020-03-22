module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = (2 ** disksNumber) - 1;
    let seconds = turns / (turnsSpeed / 3600);

    const hanoiObj = {
        turns: turns,
        seconds: seconds
    }

    return hanoiObj;
}