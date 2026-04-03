# 日记格式说明

本目录用于存放白川琴音的日记文件。

## 格式选择

支持两种格式：

### 1. Markdown 格式 (推荐)

```yaml
---
title: "日记标题"
date: "YYYY-MM-DD"
weather: "天气"
mood: "心情"
tags: ["标签1", "标签2"]
---

# 日记内容

正文部分...

---

## 练习曲目

- 曲目1
- 曲目2

---

## 明日计划

1. 计划1
2. 计划2

---

> 引用句子
```

### 2. JSON 格式

```json
{
  "title": "日记标题",
  "date": "YYYY-MM-DD",
  "weather": "天气",
  "mood": "心情",
  "tags": ["标签1", "标签2"],
  "content": "日记正文...",
  "practice": ["曲目1", "曲目2"],
  "tomorrow": ["计划1", "计划2"],
  "quote": "引用句子"
}
```

## 示例文件

- `sample.md` - Markdown 格式示例
- `sample.json` - JSON 格式示例