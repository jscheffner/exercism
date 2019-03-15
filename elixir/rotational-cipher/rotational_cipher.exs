defmodule RotationalCipher do

  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  def rotate(text, shift) do
    rotate_char = fn(char, base) -> base + rem(char - base + shift, 26) end
    rotate_char = fn
      char when char in ?a..?z -> rotate_char.(char, ?a)
      char when char in ?A..?Z -> rotate_char.(char, ?A)
      char -> char
    end

    text
    |> to_charlist
    |> Enum.map(rotate_char)
    |> to_string
  end
end
