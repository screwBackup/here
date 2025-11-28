#!/bin/bash

# Usage:
#   ./convert_to_csv.sh 5 2 7
#   ./convert_to_csv.sh 1-5

convert() {
  num="$1"
  # Convert to binary
  bin=$(echo "obase=2;$num" | bc)
  # Replace 0 with ◯ and 1 with ⊕
  bin_sym=$(echo "$bin" | sed 's/0/◯/g; s/1/⊕/g')
  echo "$num,$bin,$bin_sym"
}

print_csv() {
  echo "number,binary,binary_symbols"
  for n in "$@"; do
    convert "$n"
  done
}

if [[ "$1" =~ ^[0-9]+-[0-9]+$ ]]; then
  IFS='-' read -r start end <<< "$1"
  nums=()
  for ((i=start; i<=end; i++)); do
    nums+=("$i")
  done
  print_csv "${nums[@]}"
else
  print_csv "$@"
fi
