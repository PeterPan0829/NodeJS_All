/*
矩陣 = matrix.
*/



// 加兩個矩陣 m1,m2
function add(m1, m2) {
  let result = []
  for (let i = 0; i < m1.length; i++) {
    result[i] = []
    for (let j = 0; j < m1[i].length; j++) {
      result[i][j] = m1[i][j] + m2[i][j]
    }
  }
  return result
}

let M = add([
  [1, 2],
  [3, 4]
], [
  [1, 1],
  [1, 1]
])
console.log('M=%j', M)
