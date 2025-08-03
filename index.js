function add(numbers) {
    if (!numbers) return 0;
     return String(numbers)?.split(/[,\n]/)?.reduce((acc, curr) => acc + +curr, 0);
}

module.exports = { add };
