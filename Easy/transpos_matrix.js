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


//   Easier way to think about it, put the row first to make columns first? 
function transposeMatrix(matrix) {
    let transposedMatrix = [];
    // i = col
    for(let i = 0; i<matrix[0].length; i++ ){
      let newRow = [];
      for (let j = 0; j < matrix.length; j++) {
        // j = row
        newRow.push(matrix[j][i])
      }
      transposedMatrix.push(newRow);
    }
    return transposedMatrix;
  }

