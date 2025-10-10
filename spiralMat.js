// Q.54) spiral matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

let ans = []
if (!mat.length || !mat[0].length) return ans;

let maxRow = mat.length - 1, maxCol = mat[0].length - 1, minRow = 0, minCol = 0
while (minRow <= maxRow && minCol <= maxCol) {
    for (let j = minCol; j <= maxCol; j++) {
        ans.push(mat[minRow][j])
    }
    for (let j = minRow + 1; j <= maxRow; j++) {
        ans.push(mat[j][maxCol])
    }
    if (minRow < maxRow) {
        for (let j = maxCol - 1; j >= minCol; j--) {
            ans.push(mat[maxRow][j])
        }
    }
    if (minCol < maxCol) {
        for (let j = maxRow - 1; j > minRow; j--) {
            ans.push(mat[j][minCol])
        }
    }
    maxRow--, maxCol--, minRow++, minCol++

}
console.log(ans);
