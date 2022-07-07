# textlint-rule-preset-comnico

文章内容が、「コムニコプロダクト表記ガイドライン」に沿っているかチェックするための textlint ルールプリセットです。

## インストール

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-preset-comnico

## 使いかた

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "preset-comnico": true
  }
}
```

Via CLI

```
textlint --rule preset-comnico README.md
```

### Tests

    npm test

## License

MIT © 2022 comnico inc.
