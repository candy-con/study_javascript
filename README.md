# study_javascript

GDSC_Chuo JavaScript 勉強用のレポジトリーです。<br>
本レポジトリーは Github Codespaces を通してファイルを作成しています。<br>

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

近年はページの読み込み速度を重視する傾向にあるため、</body>タグ付近に<script>タグを用いて記述されることが多いようです。<br>

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
 
