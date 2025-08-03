function add(numbers) {
    if (!numbers) return 0;
    return numbers?.split(',')?.reduce((acc, curr) => acc + +curr, 0);
}

module.exports = { add };
