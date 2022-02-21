const A = [{
    name:'yamada', height: 170, weight: 70,
},
{
    name:'tanaka', height: 180, weight: 80,
},
{
    name:'suzuki', height: 160, weight: 60,
}]

function bubble_sort(A) {
    let i;
    let j;
    let tmp;
  
    for (i = 0; i < A.length; i++) {
      for (j = i + 1; j < A.length; j++) {
        if (A[i].height < A[j].height) {
          tmp = A[i];
          A[i] = A[j];
          A[j] = tmp;
        }
        //console.log(data);
      }
    }
  }
  bubble_sort(A);
  console.log(A)