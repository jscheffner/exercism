pub fn find_saddle_points(input: &[Vec<u64>]) -> Vec<(usize, usize)> {
    input
        .iter()
        .enumerate()
        .fold(vec![], |saddle_points, (i_row, row)| {
            let max = row.iter().max().unwrap_or(&0);
            let saddle_points_in_row = row
                .iter()
                .enumerate()
                .filter(|(i_column, element)| {
                    *element >= max
                        && **element <= input.iter().map(|r| r[*i_column]).min().unwrap()
                })
                .map(|(i_column, _)| (i_row, i_column))
                .collect();

            [saddle_points, saddle_points_in_row].concat()
        })
}
