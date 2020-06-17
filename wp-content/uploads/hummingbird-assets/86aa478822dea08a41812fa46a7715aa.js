/**handles:dgwt-justified-gallery**/
!function(t){function i(){return t("body").height()>t(window).height()}var e=function(i,e){this.settings=e,this.checkSettings(),this.imgAnalyzerTimeout=null,this.entries=null,this.buildingRow={entriesBuff:[],width:0,height:0,aspectRatio:0},this.lastAnalyzedIndex=-1,this.yield={every:2,flushed:0},this.border=e.border>=0?e.border:e.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges(),this.offY=this.border,this.spinner={phase:0,timeSlot:150,$el:t('<div class="spinner"><span></span><span></span><span></span></div>'),intervalId:null},this.checkWidthIntervalId=null,this.galleryWidth=i.width(),this.$gallery=i};e.prototype.getSuffix=function(t,i){var e,s;for(e=t>i?t:i,s=0;s<this.suffixRanges.length;s++)if(e<=this.suffixRanges[s])return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];return this.settings.sizeRangeSuffixes[this.suffixRanges[s-1]]},e.prototype.removeSuffix=function(t,i){return t.substring(0,t.length-i.length)},e.prototype.endsWith=function(t,i){return t.indexOf(i,t.length-i.length)!==-1},e.prototype.getUsedSuffix=function(t){for(var i in this.settings.sizeRangeSuffixes)if(this.settings.sizeRangeSuffixes.hasOwnProperty(i)){if(0===this.settings.sizeRangeSuffixes[i].length)continue;if(this.endsWith(t,this.settings.sizeRangeSuffixes[i]))return this.settings.sizeRangeSuffixes[i]}return""},e.prototype.newSrc=function(t,i,e,s){var n;if(this.settings.thumbnailPath)n=this.settings.thumbnailPath(t,i,e,s);else{var r=t.match(this.settings.extension),a=null!==r?r[0]:"";n=t.replace(this.settings.extension,""),n=this.removeSuffix(n,this.getUsedSuffix(n)),n+=this.getSuffix(i,e)+a}return n},e.prototype.showImg=function(t,i){this.settings.cssAnimation?(t.addClass("entry-visible"),i&&i()):t.stop().fadeTo(this.settings.imagesAnimationDuration,1,i)},e.prototype.extractImgSrcFromImage=function(t){var i="undefined"!=typeof t.data("safe-src")?t.data("safe-src"):t.attr("src");return t.data("jg.originalSrc",i),i},e.prototype.imgFromEntry=function(t){var i=t.find("> img");return 0===i.length&&(i=t.find("> a > img")),0===i.length?null:i},e.prototype.captionFromEntry=function(t){var i=t.find("> .caption");return 0===i.length?null:i},e.prototype.displayEntry=function(i,e,s,n,r,a){i.width(n),i.height(a),i.css("top",s),i.css("left",e);var o=this.imgFromEntry(i);if(null!==o){o.css("width",n),o.css("height",r),o.css("margin-left",-n/2),o.css("margin-top",-r/2);var h=o.attr("src"),g=this.newSrc(h,n,r,o);o.one("error",function(){o.attr("src",o.data("jg.originalSrc"))});var l=function(){h!==g&&o.attr("src",g)};"skipped"===i.data("jg.loaded")?this.onImageEvent(h,t.proxy(function(){this.showImg(i,l),i.data("jg.loaded",!0)},this)):this.showImg(i,l)}else this.showImg(i);this.displayEntryCaption(i)},e.prototype.displayEntryCaption=function(i){var e=this.imgFromEntry(i);if(null!==e&&this.settings.captions){var s=this.captionFromEntry(i);if(null===s){var n=e.attr("alt");this.isValidCaption(n)||(n=i.attr("title")),this.isValidCaption(n)&&(s=t('<div class="caption">'+n+"</div>"),i.append(s),i.data("jg.createdCaption",!0))}null!==s&&(this.settings.cssAnimation||s.stop().fadeTo(0,this.settings.captionSettings.nonVisibleOpacity),this.addCaptionEventsHandlers(i))}else this.removeCaptionEventsHandlers(i)},e.prototype.isValidCaption=function(t){return"undefined"!=typeof t&&t.length>0},e.prototype.onEntryMouseEnterForCaption=function(i){var e=this.captionFromEntry(t(i.currentTarget));this.settings.cssAnimation?e.addClass("caption-visible").removeClass("caption-hidden"):e.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.visibleOpacity)},e.prototype.onEntryMouseLeaveForCaption=function(i){var e=this.captionFromEntry(t(i.currentTarget));this.settings.cssAnimation?e.removeClass("caption-visible").removeClass("caption-hidden"):e.stop().fadeTo(this.settings.captionSettings.animationDuration,this.settings.captionSettings.nonVisibleOpacity)},e.prototype.addCaptionEventsHandlers=function(i){var e=i.data("jg.captionMouseEvents");"undefined"==typeof e&&(e={mouseenter:t.proxy(this.onEntryMouseEnterForCaption,this),mouseleave:t.proxy(this.onEntryMouseLeaveForCaption,this)},i.on("mouseenter",void 0,void 0,e.mouseenter),i.on("mouseleave",void 0,void 0,e.mouseleave),i.data("jg.captionMouseEvents",e))},e.prototype.removeCaptionEventsHandlers=function(t){var i=t.data("jg.captionMouseEvents");"undefined"!=typeof i&&(t.off("mouseenter",void 0,i.mouseenter),t.off("mouseleave",void 0,i.mouseleave),t.removeData("jg.captionMouseEvents"))},e.prototype.prepareBuildingRow=function(t){var i,e,s,n,r,a=!0,o=0,h=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,g=h/this.buildingRow.aspectRatio,l=this.buildingRow.width/h>this.settings.justifyThreshold;if(t&&"hide"===this.settings.lastRow&&!l){for(i=0;i<this.buildingRow.entriesBuff.length;i++)e=this.buildingRow.entriesBuff[i],this.settings.cssAnimation?e.removeClass("entry-visible"):e.stop().fadeTo(0,0);return-1}for(t&&!l&&"justify"!==this.settings.lastRow&&"hide"!==this.settings.lastRow&&(a=!1),i=0;i<this.buildingRow.entriesBuff.length;i++)e=this.buildingRow.entriesBuff[i],s=e.data("jg.width")/e.data("jg.height"),a?(n=i===this.buildingRow.entriesBuff.length-1?h:g*s,r=this.settings.rowHeight):(n=this.settings.rowHeight*s,r=this.settings.rowHeight),h-=Math.round(n),e.data("jg.jwidth",Math.round(n)),e.data("jg.jheight",Math.ceil(r)),(0===i||o>r)&&(o=r);return this.settings.fixedHeight&&o>this.settings.rowHeight&&(o=this.settings.rowHeight),this.buildingRow.height=o,a},e.prototype.clearBuildingRow=function(){this.buildingRow.entriesBuff=[],this.buildingRow.aspectRatio=0,this.buildingRow.width=0},e.prototype.flushRow=function(t){var i=this.settings,e,s,n=this.border,r;if(s=this.prepareBuildingRow(t),t&&"hide"===i.lastRow&&this.buildingRow.height===-1)return void this.clearBuildingRow();if(this.maxRowHeight.isPercentage?this.maxRowHeight.value*i.rowHeight<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value*i.rowHeight):this.maxRowHeight.value>0&&this.maxRowHeight.value<this.buildingRow.height&&(this.buildingRow.height=this.maxRowHeight.value),"center"===i.lastRow||"right"===i.lastRow){var a=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*i.margins;for(r=0;r<this.buildingRow.entriesBuff.length;r++)e=this.buildingRow.entriesBuff[r],a-=e.data("jg.jwidth");"center"===i.lastRow?n+=a/2:"right"===i.lastRow&&(n+=a)}for(r=0;r<this.buildingRow.entriesBuff.length;r++)e=this.buildingRow.entriesBuff[r],this.displayEntry(e,n,this.offY,e.data("jg.jwidth"),e.data("jg.jheight"),this.buildingRow.height),n+=e.data("jg.jwidth")+i.margins;this.galleryHeightToSet=this.offY+this.buildingRow.height+this.border,(!t||this.buildingRow.height<=i.rowHeight&&s)&&(this.offY+=this.buildingRow.height+i.margins,this.clearBuildingRow(),this.$gallery.trigger("jg.rowflush"))};var s=!1;e.prototype.checkWidth=function(){this.checkWidthIntervalId=setInterval(t.proxy(function(){var t=parseFloat(this.$gallery.width());i()===s?Math.abs(t-this.galleryWidth)>this.settings.refreshSensitivity&&(this.galleryWidth=t,this.rewind(),this.startImgAnalyzer(!0)):(s=i(),this.galleryWidth=t)},this),this.settings.refreshTime)},e.prototype.isSpinnerActive=function(){return null!==this.spinner.intervalId},e.prototype.getSpinnerHeight=function(){return this.spinner.$el.innerHeight()},e.prototype.stopLoadingSpinnerAnimation=function(){clearInterval(this.spinner.intervalId),this.spinner.intervalId=null,this.$gallery.height(this.$gallery.height()-this.getSpinnerHeight()),this.spinner.$el.detach()},e.prototype.startLoadingSpinnerAnimation=function(){var t=this.spinner,i=t.$el.find("span");clearInterval(t.intervalId),this.$gallery.append(t.$el),this.$gallery.height(this.offY+this.buildingRow.height+this.getSpinnerHeight()),t.intervalId=setInterval(function(){t.phase<i.length?i.eq(t.phase).fadeTo(t.timeSlot,1):i.eq(t.phase-i.length).fadeTo(t.timeSlot,0),t.phase=(t.phase+1)%(2*i.length)},t.timeSlot)},e.prototype.rewind=function(){this.lastAnalyzedIndex=-1,this.offY=this.border,this.clearBuildingRow()},e.prototype.updateEntries=function(i){return this.entries=this.$gallery.find(this.settings.selector).toArray(),0!==this.entries.length&&(this.settings.filter?this.modifyEntries(this.filterArray,i):this.modifyEntries(this.resetFilters,i),t.isFunction(this.settings.sort)?this.modifyEntries(this.sortArray,i):this.settings.randomize&&this.modifyEntries(this.shuffleArray,i),!0)},e.prototype.insertToGallery=function(i){var e=this;t.each(i,function(){t(this).appendTo(e.$gallery)})},e.prototype.shuffleArray=function(t){var i,e,s;for(i=t.length-1;i>0;i--)e=Math.floor(Math.random()*(i+1)),s=t[i],t[i]=t[e],t[e]=s;return this.insertToGallery(t),t},e.prototype.sortArray=function(t){return t.sort(this.settings.sort),this.insertToGallery(t),t},e.prototype.resetFilters=function(i){for(var e=0;e<i.length;e++)t(i[e]).removeClass("jg-filtered");return i},e.prototype.filterArray=function(i){var e=this.settings;return"string"===t.type(e.filter)?i.filter(function(i){var s=t(i);return s.is(e.filter)?(s.removeClass("jg-filtered"),!0):(s.addClass("jg-filtered"),!1)}):t.isFunction(e.filter)?i.filter(e.filter):void 0},e.prototype.modifyEntries=function(t,i){var e=i?this.entries.splice(this.lastAnalyzedIndex+1,this.entries.length-this.lastAnalyzedIndex-1):this.entries;e=t.call(this,e),this.entries=i?this.entries.concat(e):e},e.prototype.destroy=function(){clearInterval(this.checkWidthIntervalId),t.each(this.entries,t.proxy(function(i,e){var s=t(e);s.css("width",""),s.css("height",""),s.css("top",""),s.css("left",""),s.data("jg.loaded",void 0),s.removeClass("jg-entry");var n=this.imgFromEntry(s);n.css("width",""),n.css("height",""),n.css("margin-left",""),n.css("margin-top",""),n.attr("src",n.data("jg.originalSrc")),n.data("jg.originalSrc",void 0),this.removeCaptionEventsHandlers(s);var r=this.captionFromEntry(s);s.data("jg.createdCaption")?(s.data("jg.createdCaption",void 0),null!==r&&r.remove()):null!==r&&r.fadeTo(0,1)},this)),this.$gallery.css("height",""),this.$gallery.removeClass("justified-gallery"),this.$gallery.data("jg.controller",void 0)},e.prototype.analyzeImages=function(i){for(var e=this.lastAnalyzedIndex+1;e<this.entries.length;e++){var s=t(this.entries[e]);if(s.data("jg.loaded")===!0||"skipped"===s.data("jg.loaded")){var n=this.galleryWidth-2*this.border-(this.buildingRow.entriesBuff.length-1)*this.settings.margins,r=s.data("jg.width")/s.data("jg.height");if(n/(this.buildingRow.aspectRatio+r)<this.settings.rowHeight&&(this.flushRow(!1),++this.yield.flushed>=this.yield.every))return void this.startImgAnalyzer(i);this.buildingRow.entriesBuff.push(s),this.buildingRow.aspectRatio+=r,this.buildingRow.width+=r*this.settings.rowHeight,this.lastAnalyzedIndex=e}else if("error"!==s.data("jg.loaded"))return}this.buildingRow.entriesBuff.length>0&&this.flushRow(!0),this.isSpinnerActive()&&this.stopLoadingSpinnerAnimation(),this.stopImgAnalyzerStarter(),this.$gallery.trigger(i?"jg.resize":"jg.complete"),this.$gallery.height(this.galleryHeightToSet)},e.prototype.stopImgAnalyzerStarter=function(){this.yield.flushed=0,null!==this.imgAnalyzerTimeout&&clearTimeout(this.imgAnalyzerTimeout)},e.prototype.startImgAnalyzer=function(t){var i=this;this.stopImgAnalyzerStarter(),this.imgAnalyzerTimeout=setTimeout(function(){i.analyzeImages(t)},.001)},e.prototype.onImageEvent=function(i,e,s){if(e||s){var n=new Image,r=t(n);e&&r.one("load",function(){r.off("load error"),e(n)}),s&&r.one("error",function(){r.off("load error"),s(n)}),n.src=i}},e.prototype.init=function(){var i=!1,e=!1,s=this;t.each(this.entries,function(n,r){var a=t(r),o=s.imgFromEntry(a);if(a.addClass("jg-entry"),a.data("jg.loaded")!==!0&&"skipped"!==a.data("jg.loaded"))if(null!==s.settings.rel&&a.attr("rel",s.settings.rel),null!==s.settings.target&&a.attr("target",s.settings.target),null!==o){var h=s.extractImgSrcFromImage(o);if(o.attr("src",h),s.settings.waitThumbnailsLoad===!1){var g=parseFloat(o.attr("width")),l=parseFloat(o.attr("height"));if(!isNaN(g)&&!isNaN(l))return a.data("jg.width",g),a.data("jg.height",l),a.data("jg.loaded","skipped"),e=!0,s.startImgAnalyzer(!1),!0}a.data("jg.loaded",!1),i=!0,s.isSpinnerActive()||s.startLoadingSpinnerAnimation(),s.onImageEvent(h,function(t){a.data("jg.width",t.width),a.data("jg.height",t.height),a.data("jg.loaded",!0),s.startImgAnalyzer(!1)},function(){a.data("jg.loaded","error"),s.startImgAnalyzer(!1)})}else a.data("jg.loaded",!0),a.data("jg.width",a.width()|parseFloat(a.css("width"))|1),a.data("jg.height",a.height()|parseFloat(a.css("height"))|1)}),i||e||this.startImgAnalyzer(!1),this.checkWidth()},e.prototype.checkOrConvertNumber=function(i,e){if("string"===t.type(i[e])&&(i[e]=parseFloat(i[e])),"number"!==t.type(i[e]))throw e+" must be a number";if(isNaN(i[e]))throw"invalid number for "+e},e.prototype.checkSizeRangesSuffixes=function(){if("object"!==t.type(this.settings.sizeRangeSuffixes))throw"sizeRangeSuffixes must be defined and must be an object";var i=[];for(var e in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(e)&&i.push(e);for(var s={0:""},n=0;n<i.length;n++)if("string"===t.type(i[n]))try{var r=parseInt(i[n].replace(/^[a-z]+/,""),10);s[r]=this.settings.sizeRangeSuffixes[i[n]]}catch(t){throw"sizeRangeSuffixes keys must contains correct numbers ("+t+")"}else s[i[n]]=this.settings.sizeRangeSuffixes[i[n]];this.settings.sizeRangeSuffixes=s},e.prototype.retrieveMaxRowHeight=function(){var i={};if("string"===t.type(this.settings.maxRowHeight))this.settings.maxRowHeight.match(/^[0-9]+%$/)?(i.value=parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])/100,i.isPercentage=!1):(i.value=parseFloat(this.settings.maxRowHeight),i.isPercentage=!0);else{if("number"!==t.type(this.settings.maxRowHeight))throw"maxRowHeight must be a number or a percentage";i.value=this.settings.maxRowHeight,i.isPercentage=!1}if(isNaN(i.value))throw"invalid number for maxRowHeight";return i.isPercentage?i.value<100&&(i.value=100):i.value>0&&i.value<this.settings.rowHeight&&(i.value=this.settings.rowHeight),i},e.prototype.checkSettings=function(){if(this.checkSizeRangesSuffixes(),this.checkOrConvertNumber(this.settings,"rowHeight"),this.checkOrConvertNumber(this.settings,"margins"),this.checkOrConvertNumber(this.settings,"border"),"justify"!==this.settings.lastRow&&"nojustify"!==this.settings.lastRow&&"left"!==this.settings.lastRow&&"center"!==this.settings.lastRow&&"right"!==this.settings.lastRow&&"hide"!==this.settings.lastRow)throw'lastRow must be "justify", "nojustify", "left", "center", "right" or "hide"';if(this.checkOrConvertNumber(this.settings,"justifyThreshold"),this.settings.justifyThreshold<0||this.settings.justifyThreshold>1)throw"justifyThreshold must be in the interval [0,1]";if("boolean"!==t.type(this.settings.cssAnimation))throw"cssAnimation must be a boolean";if("boolean"!==t.type(this.settings.captions))throw"captions must be a boolean";if(this.checkOrConvertNumber(this.settings.captionSettings,"animationDuration"),this.checkOrConvertNumber(this.settings.captionSettings,"visibleOpacity"),this.settings.captionSettings.visibleOpacity<0||this.settings.captionSettings.visibleOpacity>1)throw"captionSettings.visibleOpacity must be in the interval [0, 1]";if(this.checkOrConvertNumber(this.settings.captionSettings,"nonVisibleOpacity"),this.settings.captionSettings.nonVisibleOpacity<0||this.settings.captionSettings.nonVisibleOpacity>1)throw"captionSettings.nonVisibleOpacity must be in the interval [0, 1]";if("boolean"!==t.type(this.settings.fixedHeight))throw"fixedHeight must be a boolean";if(this.checkOrConvertNumber(this.settings,"imagesAnimationDuration"),this.checkOrConvertNumber(this.settings,"refreshTime"),this.checkOrConvertNumber(this.settings,"refreshSensitivity"),"boolean"!==t.type(this.settings.randomize))throw"randomize must be a boolean";if("string"!==t.type(this.settings.selector))throw"selector must be a string";if(this.settings.sort!==!1&&!t.isFunction(this.settings.sort))throw"sort must be false or a comparison function";if(this.settings.filter!==!1&&!t.isFunction(this.settings.filter)&&"string"!==t.type(this.settings.filter))throw"filter must be false, a string or a filter function"},e.prototype.retrieveSuffixRanges=function(){var t=[];for(var i in this.settings.sizeRangeSuffixes)this.settings.sizeRangeSuffixes.hasOwnProperty(i)&&t.push(parseInt(i,10));return t.sort(function(t,i){return t>i?1:t<i?-1:0}),t},e.prototype.updateSettings=function(i){this.settings=t.extend({},this.settings,i),this.checkSettings(),this.border=this.settings.border>=0?this.settings.border:this.settings.margins,this.maxRowHeight=this.retrieveMaxRowHeight(),this.suffixRanges=this.retrieveSuffixRanges()},t.fn.justifiedGallery=function(i){return this.each(function(s,n){var r=t(n);r.addClass("justified-gallery");var a=r.data("jg.controller");if("undefined"==typeof a){if("undefined"!=typeof i&&null!==i&&"object"!==t.type(i)){if("destroy"===i)return;throw"The argument must be an object"}a=new e(r,t.extend({},t.fn.justifiedGallery.defaults,i)),r.data("jg.controller",a)}else if("norewind"===i);else{if("destroy"===i)return void a.destroy();a.updateSettings(i),a.rewind()}a.updateEntries("norewind"===i)&&a.init()})},t.fn.justifiedGallery.defaults={sizeRangeSuffixes:{},thumbnailPath:void 0,rowHeight:120,maxRowHeight:-1,margins:1,border:-1,lastRow:"nojustify",justifyThreshold:.75,fixedHeight:!1,waitThumbnailsLoad:!0,captions:!0,cssAnimation:!1,imagesAnimationDuration:500,captionSettings:{animationDuration:500,visibleOpacity:.7,nonVisibleOpacity:0},rel:null,target:null,extension:/\.[^.\\\/]+$/,refreshTime:200,refreshSensitivity:0,randomize:!1,sort:!1,filter:!1,selector:"> a, > div:not(.spinner)"}}(jQuery);