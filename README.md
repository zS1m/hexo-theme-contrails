# hexo-theme-contrails

## 🛠 In development, coming soon...

## 🌱 TODO
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
  highlight: true
  html: true
  xhtmlOut: true
  breaks: true
  langPrefix:
  linkify: true
  typographer:
  quotes: “”‘’
  pre_class: highlight
```