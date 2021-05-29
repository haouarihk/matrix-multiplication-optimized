function matrixMultiplication(vec1, vec2) {
  if (!vec1[0] || !vec2[0]) return Error("no vector has been provided");
  // if (vec1[0].length != vec2.length) return Error("sorry, not possible")

  return vec1
    .map(r => r
      .map((c, i) => vec2[i].reduce((a, v) => a + v, 0) * c))
}

let v1 = [
  [1, 2],
  [1, 2]
]
let v2 = [
  [1, 2],
  [1, 2]
]



function calculate() {
  let matrixSize = +document.getElementById("input").value || 200;

  v1 = [];
  for (let i = 0; i < matrixSize; i++) {
    v1[i] = [];
    v1[i].push([]);
    for (let j = 0; j < 200; j++) {
      v1[i][j] = Math.round(Math.random() * 100)
    }
  }

  v2 = v1;

  const before = performance.now();

  console.log("a", matrixMultiplication(v1, v2))

  const after = performance.now();

  const perf = Math.round(after - before);

  document.getElementById('result').innerHTML = perf;
}


