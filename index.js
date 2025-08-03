function add(numbers) {
    if (!numbers) return 0;
    // storing delimiters in array for scalability
    let delimiters = [',', '\n'];
    // checking for custom delimiters with pattern : "//[delimiter]\n[numbers…]"
    if (String(numbers).startsWith('//') && String(numbers).includes('\n')) {
        delimiters.push(String(numbers).slice(2, String(numbers).indexOf('\n')));
        numbers = numbers.slice(String(numbers).indexOf('\n'));
    }
    let separatedNum = String(numbers).split(new RegExp(delimiters.join('|')));
    return separatedNum?.reduce((acc, curr) => {
        return acc + +curr
    }, 0)
}

module.exports = { add };
