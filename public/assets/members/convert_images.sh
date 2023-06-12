#!/bin/bash
for file in *.jpg *.png *.JPG *.jpeg; do
  cwebp -q 80 -alpha_q 100 "$file" -o "${file%.*}.webp"
done
