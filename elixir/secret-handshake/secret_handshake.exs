defmodule SecretHandshake do
  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    binary_list = Integer.digits code, 2
    actions = ["wink", "double blink", "close your eyes", "jump"]

    is_active_action = fn {bit, index} -> bit == 1 && index <= 3 end
    get_action_by_index = fn {_, index} -> Enum.at actions, index end

    revert_if_bit_is_set = fn
      res when (length binary_list) <= 4 -> res
      res -> Enum.reverse res
    end

    binary_list
    |> Enum.reverse
    |> Enum.with_index
    |> Enum.filter(is_active_action)
    |> Enum.map(get_action_by_index)
    |> revert_if_bit_is_set.()

  end
end
