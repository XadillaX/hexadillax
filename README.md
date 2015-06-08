# HeXadillaX

It's another version of `GhoSadillaX`, the theme of `Ghost`.

## Usage

### CONFIG

Copy `_config.sample.yml` to `_config.yml`.

And edit the subjects.

### TAGS && CATEGORIES

Create two folders under your `source` directory: `tags` and `categories`.

Create an `index.md` file under each folder that you've just created.

`tags/index.md`:

```markdown
layout: tags
title: tags
---
```

`categories/index.md`:

```markdown
layout: categories
title: categories
---
```

### DUOSHUO

Register your own [duoshuo](http://dev.duoshuo.com/docs/501e6ce1cff715f71800000d) account and replace `duoshuo short_name` in `_config.yml`.

### 百度统计

向 `_config.yml` 配置文件添加`baidu_analytics: 你的统计ID`

### 单篇文章开启 Mathjax

向 `_config.yml` 文章源码文件头部添加 `mathjax: true`


