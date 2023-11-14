function transposeMatrix(matrix) {
    let transposedMatrix = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j <matrix[i].length; j++) {
        if(i===0){
          transposedMatrix.push([matrix[i][j]])
        }else{
          transposedMatrix[j].push(matrix[i][j])
        }
      }
    }
    return transposedMatrix;
  }
