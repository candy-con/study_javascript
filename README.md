# study_javascript

GDSC_Chuo JavaScript 勉強用のレポジトリーです。<br>
本レポジトリは実行環境としてGithub Codespaces を採用しています。

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

"//"　一行のコメント <br>
"/* － */" 複数行に渡るコメント <br>

コメントを書く癖をつけると、のちのちソースコードを見返すときに可読率が違ってきます。<br>

<strong>4. アラートの表示</strong><br>

警告やメッセージをポップアップで出してくれます。<br>
実際にhello_world.htmlのscriptタグ内で実装してみましょう。<br>
<br>
alert("メッセージ"); <br>
<br>
と記述してやれば、htmlを立ち上げたときにポップアップが表示されるはずです。<br>

<strong>5. 文字の表示</strong><br>
  
htmlに直接文字を表示させるには、document.write()を使います。<br>
今の時点ではそういうおまじないだと思っていただいて構いません。<br>
<br>
document.write("メッセージ");
<br>
と書いてあげると、htmlに任意のメッセージが表示されるはずです。<br>
 
<strong>6. 変数とその制約</strong><br>

変数を定義して、出力してみましょう。<br>
「変数」とは値や文字（文字列）を入れる箱のようなものです。<br>
JavaScriptでは<br>
<br>
var (変数名) = なんとか;<br>
<br>
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

変数は「箱」なので、当然中身を入れ替えることができます。,br>
<br>
var kokekoko = "niwatori";<br>
kokekoko = "meow"; <-- 中身は"meow"になる。<br>
<br>
しかし、URLや人名など、うっかり変えてしまうとまずいものに対してはどう対応したらよいのでしょうか。<br>
変数の中身を変更したくない場合、JavaScriptでは「定数」というものを用います。<br>
var の代わりに定数を意味するconstを頭に付け、定数名を書きます。<br>
<br>
const foo = なんとか;  <--- 中身は代入以降変わらない。<br>
<br>
※ただし、ブラウザによっては中身が更新されてしまうこともあります。<br>

