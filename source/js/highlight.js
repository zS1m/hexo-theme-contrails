// highlightjs init & line number   base on https://www.yangdx.com/2020/04/144.html
(function (w, d) {
  w.hljsln = {
    initLineNumbersOnLoad: initLineNumbersOnLoad,
    addLineNumbersForCode: addLineNumbersForCode
  };

  function initLineNumbersOnLoad() {
    if (d.readyState === 'interactive' || d.readyState === 'complete') {
      documentReady();
    } else {
      w.addEventListener('DOMContentLoaded', function () {
        documentReady();
      });
    }
  }

  function addLineNumbersForCode(html) {
    let num = 0;
    html = html.replace(/\r\n|\r|\n/g, function (a) {
      num++;
      return `<span class="ln-num" data-num="${ num + '' }"></span>${ a }`;
    });
    html = `<span class="ln-bg"></span>${ html }`;
    return html;
  }

  function documentReady() {
    // 所有代码块
    const elements = d.querySelectorAll('pre code');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].className.indexOf('hljsln') === -1) {
        let html = elements[i].innerHTML;
        html = addLineNumbersForCode(html);
        elements[i].innerHTML = html;
        elements[i].className += ' hljsln';
      }
    }
  }
}(window, document));

// 初始化highlight.js
hljs.highlightAll();
hljsln.initLineNumbersOnLoad();
