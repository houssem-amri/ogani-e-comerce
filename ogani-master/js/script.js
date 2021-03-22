// var houssem = 'hello';
// alert(houssem) ;

// function declaration
function search(x, T) {
	var s = 0;
	for (var i = 0; i < T.length; i++) {
		if (T[i] == x) {
			s = s + 1;
		}
	}
	return s;
}

function Somme(A, B) {
	C = [];
	for (var i = 0; i < B.length; i++) {
		C[i] = A[i] + B[B.length - 1 - i];
	}
	return C;
}

function negative(T) {
	pos = 0;
	for (let i = 0; i < T.length; i++) {
		if (T[i] < 0) {
			pos = i;
		}
	}
	return pos;
}
function pair(X) {
	R = '';
	if (X % 2 == 0) {
		R = 'pair';
	} else {
		R = 'impair';
	}
	return R;
}

function ttc(Q, P) {
	var T = 0,
		TC = 0;
	for (let i = 0; i < Q.length; i++) {
		T = T + Q[i] * P[i];
	}
	TC = T * 19 / 100 + T;
	return [ T, TC ];
}

function voyelle(T) {
	var V = [];

	for (let i = 0; i < T.length; i++) {
		var ch = T[i];
		var S = 0;
		for (let j = 0; j < ch.length; j++) {
			if (ch[j] == 'a' || ch[j] == 'e' || ch[j] == 'i' || ch[j] == 'o' || ch[j] == 'u' || ch[j] == 'y') {
				S = S + 1;
			}
		}
		V[i] = ch.length - S;
	}
	return V;
}

function SommeT(T) {
	var S = 0;
	for (let i = 0; i < T.length; i++) {
		S = T[i] + S;
	}
	return S;
}

function SommePair(T) {
	var S = 0;
	for (let i = 0; i < T.length; i++) {
		if (T[i] % 2 == 0) {
			S = T[i] + S;
		}
	}
	return S;
}

function Invers(Ch) {
	var R = '';
	for (let i = 0; i < Ch.length; i++) {
		R = R + Ch[Ch.length - i - 1];
	}
	return R;
}

function Occurence(X, T) {
	var S = 0;
	for (let i = T.length - 1; i >= 0; i--) {
		if (T[i] == X) {
			S = i;
		}
	}
	return S;
}

function consonne(T) {
	var C = [];

	for (var i = 0; i < T.length; i++) {
		var cons = 0;
		var ch = T[i];
		for (var j = 0; j < ch.length; j++) {
			if (ch[j] != 'a' || ch[j] != 'e' || ch[j] != 'u' || ch[j] != 'i' || ch[j] != 'y' || ch[j] != 'o') {
				cons = cons + 1;
			}
		}
		C[i] = cons;
	}
	return C;
}

function checkNumber(value) {
	R = '';
	if (value % 1 == 0) {
		R = true;
	} else {
		R = false;
	}
	return R;
}
// var x = checkNumber('1122');
// alert(x);

// var V=consonne(['hello', 'ok', 'crococoder'])
// alert(V)

// var x=Occurence(5,[5,5,8,7,14,5,2,5,12,15,4,6,5,3]);
// alert(x);

// var x=Invers("houssem");
// alert(x);

// var x=SommePair ([-5,4,8,2,3,9,4]);
// alert(x);

// var x=SommeT([4,5,14,52,74,2,6]);
// alert(x);

// var x=voyelle(['houssem','ok','dong']) ;
// alert(x);

// var x=ttc([2,4,3],[7,4,1]);
// alert(x);

// var x = pair(8);
// alert(x);

// function call
// var x =search(5,[12,7,5,1,5]);
// var y=search(6,[17,6,6]);
// alert(x);
// alert(y);

// // var x=Somme([5,3,9,-5],[3,7,6,-2]);
// alert(x);

// var x=negative([4,-5,8,-16,8]);
// alert(x);
