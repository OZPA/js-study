# js-study

## Overview

JavaScriptの学習用レポジトリです。

## ディレクトリ構成

* src/  作業ディレクトリ
  + html/ htmlを格納
  + static/
    * css/  sass
    * js/
    * img/
* dist/ 出力用ディレクトリ

## gulp

gulpを使用し、Sassのコンパイル、jsの圧縮、ファイルの監視、LiveReloadなどを行います。

```
gulp watch: Build & Run + LiveReload
gulp build: Build minified files
```

## LiveReload

`gulp watch`をした状態で`http://localhost:3000`にアクセスするとファイルの監視とLiveReloadを行います。
