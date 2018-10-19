module RunLength (decode, encode) where
import Data.List (group, groupBy)
import Data.Char (isDigit, digitToInt)

decode :: String -> String
decode txt = foldr fn "" (groupBy groupNumbers txt)
    where fn x acc
           | all isDigit x = (replicate (read x - 1) (head acc) ++ acc)
           | otherwise = [x] ++ acc
          groupNumbers a b = isDigit a && isDigit b


encode :: String -> String
encode txt = concat $ map encodeGroup $ group txt
    where encodeGroup g = counter g ++ [head g]
          counter x
           | length x == 1 = ""
           | otherwise = show (length x)
