function megasena(range) {
  const numbers = Array(range)
    .fill(0)
    .reduce((nums) => {
        const newNumber = unique(1, 60, nums)
        return [...nums, newNumber]
    },[])
    .sort((n1, n2) => n1-n2);
  return numbers;
}

function unique(min, max, array) {
  const random = parseInt(Math.random() * (max + 1 - min) + min);
  return array.includes(random) ? unique(min, max, array) : random;
}

console.log(megasena(6));
