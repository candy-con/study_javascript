
var piyo = "iTL"+2022; //javascriptは少々特殊で、文字列と数字をつなげてもうまく対応してくれます。
console.log(piyo);

var hoge = __Q6__; //6. 変数を定義して、hello World! と出力してみましょう。
console.log(hoge); 



var fuga = "iTL"; 
console.log(fuga);
fuga = _Q7_; // 7. fugaの中身を"GDSC"に書き換えてみましょう。
console.log(fuga);

/*
7. おまけ
*/

var foobar = 1;
foobar++; // この書き方はインクリメントといいます。+1する操作です。反対はデクリメント(foobar--;)
console.log(foobar);
foobar--;
console.log(foobar);

/*
 8.関数と引数、変数のスコープ
 */
var gunma = "MIKAI"; //グローバル変数

function piyopiyo(prefecture){
    var hoge = "GDSC"; //ローカル変数
    var piyo = "Chuo"; //ローカル変数
    console.log(hoge+piyo);
    console.log(prefecture);
}

console.log(hoge+piyo);
piyopiyo(gunma);

function farm(niwatori,ushi,uma) { //複数の引数を受け取ることもできます。
    console.log(niwatori); 
    console.log(ushi);
    console.log(uma);
    return "bokujyou"; //これが返り値です。
}

var hitsugi = "meee";
var yagi = "meee";
var buta = "buhi";

var shisetsu = farm(hitsugi,yagi,buta);

console.log(shisetu); //このように関数の返り値を変数に渡して出力することもできます。