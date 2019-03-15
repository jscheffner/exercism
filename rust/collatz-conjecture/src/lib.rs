fn collatz_recursive(n: u64, counter: u64) -> Option<u64> {
    match (n, n % 2) {
        (0, _) => None,
        (1, _) => Some(counter),
        (number, 0) => collatz_recursive(number / 2, counter + 1),
        (number, _) => collatz_recursive(number * 3 + 1, counter + 1)
    }
}

pub fn collatz(n: u64) -> Option<u64> {
    collatz_recursive(n, 0)
}
