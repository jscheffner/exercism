(ns bob (:use clojure.string))

(defn is-all-upper-case? [str]
  (and 
    (= str (upper-case str))
    (not= str (lower-case str))))

(defn is-question? [str] (ends-with? str "?"))

(defn response-for [text]
  (cond
    (blank? text) "Fine. Be that way!"
    (is-all-upper-case? text) "Whoa, chill out!"
    (is-question? text) "Sure."
    :else "Whatever."))

