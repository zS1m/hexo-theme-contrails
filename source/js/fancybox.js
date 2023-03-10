/* Wrap images with fancybox */
$(document).ready(function () {
  $('img').each(function () {
    // class设置no-fancybox以禁用fancybox
    if ($(this).hasClass('no-fancybox')) {
      return;
    }
    const $imgCaption = $(this).attr('alt');
    let $imgWrapLink = $(this).parent('a');
    // 带超链接的img不使用fancybox
    if ($imgWrapLink.length < 1) {
      const src = this.getAttribute('src');
      $imgWrapLink = $(this).wrap(`<a href="${src}"></a>`).parent('a');
      $imgWrapLink.attr('data-fancybox', 'images');
    }
    // 有alt属性时设置字幕
    if ($imgCaption) {
      $imgWrapLink.attr('data-caption', $imgCaption);
    }
  });
  $('[data-fancybox="images"]').fancybox({
    buttons : [
      'zoom',
      'slideShow',
      'fullScreen',
      'close'
    ],
    animationEffect: 'zoom-in-out'
  })
})
