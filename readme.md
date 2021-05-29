



# Thoughs:
I was thinking if it's possible to calculate matrix multiplication in one line (tiniest matrix multiplication)


# How can i test it:
``https://rawcdn.githack.com/haouarihk/matrix-multiplication-optimized/276ab5d77678ae99b666d8144c2dd03f0c92139a/index.html``

# How it works:
```js
vec1
    .map((r,j)=>r
      .map((c,i)=>vec2[i].reduce((a, v) => a + v, 0) * c))
```

and i did it.

The concept of it is, no iteration is being waisted, meaning it might be the most optimized matrix multiplication.

in my machine with ``matrixSize = 200`` it was 10-15 ms.

my machine:
- Ryzen 3 3200g
- 24GB ram 2666HZ ddr4
- RX580 Graphic card
- windows 10 64bit