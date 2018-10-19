(ns rna-transcription (:use clojure.string))

(defn transcribeNucleotide [nucleotide]
  (case nucleotide
    \G \C
    \C \G
    \T \A
    \A \U
    (assert false))
)

(defn to-rna [strand]
  (->> strand (map transcribeNucleotide) join))
