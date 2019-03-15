pub fn is_leap_year(year: u64) -> bool {
    let is_divisible_by = |divisor| year % divisor == 0;
    is_divisible_by(4) && (!is_divisible_by(100) || is_divisible_by(400))
}
