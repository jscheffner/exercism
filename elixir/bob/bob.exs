defmodule Bob do
  def hey(input) do
    cond do
      silent?(input) -> "Fine. Be that way!"
      asking?(input) and yelling?(input) -> "Calm down, I know what I'm doing!"
      asking?(input) -> "Sure."
      yelling?(input) -> "Whoa, chill out!"
      true -> "Whatever."
    end
  end

  defp silent?(input), do: input |> String.trim |> String.length == 0
  defp letters?(input), do: Regex.match?(~r/\p{L}+/, input)
  defp yelling?(input), do: input == String.upcase(input) and letters?(input)
  defp asking?(input), do: String.last(input) == "?"
end
