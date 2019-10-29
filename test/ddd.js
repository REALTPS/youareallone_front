class TT {
  value() {
    return 0;
  }
}
class TTT extends TT {
  constructor(realvalue) {
    super();
    this.realvalue = realvalue;
  }
  value() {
    return this.realvalue;
  }
}

function solution(A) {
  var foo = { value: 0 };
  let T = [];
  for (var i = 0; i < A.length; i++) {
    var a = new TTT(A[i]);
    T.push(a);
  }
  return T;
}

var d = [4, 2];
solution(d);
