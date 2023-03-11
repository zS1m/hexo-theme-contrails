# hexo-theme-contrails

## 🛠 In development, coming soon...

Based on [Hexo-Theme-Type](https://github.com/aiokr/Hexo-Theme-Type) theme

## 🌱 TODO
- [X] Code highlight
- [ ] Adapt to mobile terminal
- [ ] Toc
- [ ] Music player

## ⚙︎ How to use

run in the root dir:
```bash
npm un hexo-renderer-marked --save
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

add these codes in the _config.yml at root dir
```yaml
markdown_it_plus:
  highlight: false
  html: true
  xhtmlOut: true
  breaks: true
  langPrefix:
  linkify: true
  typographer:
  quotes: “”‘’
  pre_class: highlight
```

change highlight to false in _config.yml at the root dir
```yaml
highlight:
  enable: false
```