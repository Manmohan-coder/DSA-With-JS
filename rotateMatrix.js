
// Q.48) rotate image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (let i = 0; i < mat.length; i++) {
    for (let j = i; j < mat[i].length; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
    }
}
for (let i = 0; i < mat.length; i++) {
    let k = 0, j = mat[i].length - 1;
    while (k < j) {
        [mat[i][k], mat[i][j]] = [mat[i][j], mat[i][k]]
        k++
        j--
    }
}

