---
layout: page
title: 'Book Log'
---

<div align="center">
<img src="../images/works/book-log/demo.gif" alt="Book Log デモ">
</div>

## 概要

Next.js × DynamoDB × S3で作成した本管理アプリです。

&#x203B; 課金対策のため、現在はすべてのリソースを削除し、ローカル環境でのみ開発・運用を行っております。

## 制作背景

せっかく購入したのに結局最後まで読むことのなかった本が数多く存在するため、本の積み防止を目的に作成しました。

## 解説

AWSの勉強にもなるため画像のアップロード先としてS3を選択しました。

ストレージサービスとしてAWSのS3を利用しているため、データベースもAWSが提供しているサービスにしようと考え、DynamoDBを採用しました。
RDSは運用コストがDynamoDBと比較して多くかかってしまうため、採用を見送りました。

## 今後の改善点

- 本管理アプリとしての機能を充実させる
- (運用費の面で厳しいが、)誰でも使える用にリリースを行う
