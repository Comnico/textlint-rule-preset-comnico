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
    "comnico": true
  }
}
```

Via CLI

```
textlint --rule preset-comnico README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © 2022 comnico inc.
