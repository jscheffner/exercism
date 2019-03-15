pub fn square(s: u32) -> u64 {
    match s {
        1...64 => (1..s).fold(1, |acc, _| acc * 2),
        _ => panic!("Square must be between 1 and 64"),
    }
}

pub fn total() -> u64 {
    (1..64)
        .fold((1, 1), |(sum, last), _| {
            let next = 2 * last;
            (sum + next, next)
        })
        .0
}
