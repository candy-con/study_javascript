# study_javascript

GDSC_Chuo JavaScript 勉強用のレポジトリーです。<br>
本レポジトリは実行環境としてGithub Codespaces を採用しています。<br>
<br>
ブラウザにおけるhtmlの立ち上げ方については<br>
hello_world.html 内にある「webページの立ち上げ方」を参照ください。<br>

## 目次
- 基本事項
- ダイアログ

### 基本事項

<strong>1. そもそもJavaScriptとは何なのか？</strong><br>

https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript

<strong>2. スクリプトの記入場所</strong><br>

大抵はheaderやbodyタグ内でscriptタグを用いて組み込まれたりします。<br>
または、タグにそのまま記述することもあります。<br>
例えば、button onclick　などがその典型です。<br>

近年はページの読み込み速度を重視する傾向にあるため、bodyタグ付近にscriptタグを用いて記述されることが多いようです。<br>

<strong>3. コメント</strong><br>

```
"//"　一行のコメント 
"/* － */" 複数行に渡るコメント 
```

コメントを書く癖をつけると、のちのちソースコードを見返すときに可読率が違ってきます。<br>

<strong>4. アラートの表示</strong><br>

警告やメッセージをポップアップで出してくれます。<br>
実際にhello_world.htmlのscriptタグ内で実装してみましょう。<br>

```javascript
alert("メッセージ"); 
```

と記述してやれば、htmlを立ち上げたときにポップアップが表示されるはずです。<br>

<strong>5. 文字の表示</strong><br>
  
htmlに直接文字を表示させるには、document.write()を使います。<br>
今の時点ではそういうおまじないだと思っていただいて構いません。<br>

```javascript
document.write("メッセージ");
```

と書いてあげると、htmlに任意のメッセージが表示されるはずです。<br>
 
<strong>6. 変数とその制約</strong><br>

変数を定義して、出力してみましょう。<br>
「変数」とは値や文字（文字列）を入れる箱のようなものです。<br>
JavaScriptでは<br>

```javascript
var (変数名) = なんとか;
```

という風に変数を宣言します<br>
なお、変数の命名には制約があり、<br>
予約語といわれるもの　alert,console,document　などは使用できません。<br>
<br>
ほかの制約<br>
- １文字目に数字は使用できません。
- 大文字と小文字は区別されます。
- Unicode文字、アンダーバー、＄マークなどが使用できます。
<br>
<strong>7.変数の更新と定数</strong><br>
<br>
変数は「箱」なので、当然中身を入れ替えることができます。<br>

```javascript
var kokekoko = "niwatori";
kokekoko = "meow"; <-- 中身は"meow"になる。
```

しかし、URLや人名など、うっかり変えてしまうとまずいものに対してはどう対応したらよいのでしょうか。<br>
変数の中身を変更したくない場合、JavaScriptでは「定数」というものを用います。<br>
var の代わりに定数を意味するconstを頭に付け、定数名を書きます。<br>

```javascript
const foo = なんとか;  <--- 中身は代入以降変わらない。
```

※ただし、ブラウザによっては中身が更新されてしまうこともあります。<br>
<br>
<strong>8. 関数と引数、変数のスコープ</strong><br>
<br>
Javascriptの一連の命令は、関数という形でまとめて実行することができます。<br>
いわば、変数（箱）を格納する倉庫のようなものです。<br>
関数はキューのような構造をしていて、<br>
数字や文字列を放り込むと、何かを返してくれます。これを返り値と言います。<br>
また、中身の処理だけを実行して、<br>
入力を受け付けない関数も作れたりします（返り値のない関数もつくれちゃう）。<br>

```javascript
function piyo(niwatori)
{
中身の処理;
return なんとかかんとか;
}
```

piyo が関数名、niwatoriが引数になります。<br>
{ } 内に中身で行う処理を書いてやります。<br>
return なんとかかんとか　は返り値を指定する部分です。あってもなくても構いません。<br>
<br>
また、関数を利用するにあたっては、変数のスコープも考慮しなければいけません。<br>
変数は宣言した場所によってグローバル変数・ローカル変数に分類され、<br>
グローバル変数はどこからでも呼び出すことができますが、<br>
ローカル変数は関数内でしか使用することができません。<br>
つまり、関数の外で使用すると、スコープの関係でエラーが出てしまいます。<br>
<br>
スコープによって出力がどのように変化するのか、basic.jsで確認してみましょう。<br>
