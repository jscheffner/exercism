module Bob (responseFor) where
import qualified Data.Char as C

responseFor :: String -> String
responseFor msg
    | isAllSpace = "Fine. Be that way!"
    | isYelling  = "Whoa, chill out!"
    | isQuestion = "Sure."
    | otherwise  = "Whatever."
    where
      isAllSpace = all C.isSpace msg
      isYelling  = not (any C.isLower msg) && any C.isUpper msg
      isQuestion = last (filter (not . C.isSpace) msg) == '?'
