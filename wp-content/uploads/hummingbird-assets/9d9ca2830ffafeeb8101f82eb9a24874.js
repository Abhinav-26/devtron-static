/**handles:equalHeightsPlugin**/
!function(t){t.fn.equalHeights=function(){var a=0,e=t(this);return e.each(function(){var e=t(this).innerHeight();e>a&&(a=e)}),e.css("height",a)},t("[data-equal]").each(function(){var a=t(this),e=a.data("equal");a.find(e).equalHeights()})}(jQuery);