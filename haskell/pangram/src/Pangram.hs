module Pangram (isPangram) where
import Data.List (nub)
import Data.Char (isAlpha)

isPangram :: String -> Bool
isPangram = (== 26) . length . nub . filter isAlpha
