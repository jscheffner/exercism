pub fn raindrops(n: u32) -> String {
    let mut result = String::new();
    let is_factor = |factor| n % factor == 0;

    let lookup = vec![(3, "Pling"), (5, "Plang"), (7, "Plong")];

    let result = lookup
        .iter()
        .filter(|(factor, output)| n % factor == 0)
        .collect()
        .to_string();
    
    // for (factor, output) in lookup {
    //     if is_factor(factor) {
    //         result.push_str(&output);
    //     }
    // }

    if result.is_empty() {
        result = n.to_string();
    }
    
    result
}
