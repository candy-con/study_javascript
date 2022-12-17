# study_javascript

GDSC_Chuo JavaScript 勉強用のレポジトリーです。<br>
本レポジトリーは Github Codespaces を通してファイルを作成しています。<br>

## 目次
- 基本事項
- ダイアログ

### 基本事項

1. そもそもJavaScriptとは何なのか？<br>

https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript

2. スクリプトの記入場所<br>

大抵はheaderやbodyタグ内でscriptタグを用いて組み込まれたりします。<br>
または、タグにそのまま記述することもあります。<br>
例えば、button onclick　などがその典型です。<br>

近年はページの読み込み速度を重視する傾向にあるため、</body>タグ付近に<script>タグを用いて記述されることが多いようです。<br>

3. コメント<br>

"//"　一行のコメント <br>
"/* － */" 複数行に渡るコメント <br>

コメントを書く癖をつけると、のちのちソースコードを見返すときに可読率が違ってきます。<br>

4. アラートの表示<br>

警告やメッセージをポップアップで出してくれます。<br>
実際にhello_world.htmlのscriptタグ内で実装してみましょう。<bn>
<br>
alert("メッセージ"); <br>
<br>
と記述してやれば、htmlを立ち上げたときにポップアップが表示されるはずです。<br>

