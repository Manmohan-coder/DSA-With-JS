// Q 832.flipping an image
// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// let mat = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
let mat = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
]

for (let i = 0; i < mat.length; i++) {
    let k = 0, j = mat[i].length - 1
    while (k < j) {
        [mat[i][k], mat[i][j]] = [mat[i][j], mat[i][k]]
        k++, j--
    }
}
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
        (mat[i][j] == 0) ? mat[i][j] = 1 : mat[i][j] = 0
    }
}
console.log(mat);

// second approch with reverse method
for (let i = 0; i < mat.length; i++) {
    mat[i] = mat[i].reverse()
    for (let j = 0; j < mat[0].length; j++) {
        (mat[i][j] == 0) ? mat[i][j] = 1 : mat[i][j] = 0
    }
}
console.log(mat);