extern crate rand;

use rand::{thread_rng, Rng};

fn pow_mod(x: u64, e: u64, m: u64) -> u64 {
    (0..e).fold(1, |res, _| (res * x) % m)
}

pub fn private_key(p: u64) -> u64 {
    let mut rng = thread_rng();
    rng.gen_range(2, p)
}

pub fn public_key(p: u64, g: u64, a: u64) -> u64 {
    pow_mod(g, a, p)
}

pub fn secret(p: u64, b_pub: u64, a: u64) -> u64 {
    pow_mod(b_pub, a, p)
}
