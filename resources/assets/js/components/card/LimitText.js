
import $ from 'jquery'

$.fn.limitText = function(option) {
    'use strict';
    var self = this,
        that = option || {};
    return (function () {
        var text_remaining,
            textAreas = self,
            i,
            textAreasCount = textAreas.length,
            maxLength,
            maxLength2,
            selector = that.selector || false,
            charTxt = selector?(that.text?' ' + that.text:''):false;
        var textAreasAll = (function () {
            for (i = 0; i < textAreasCount; i++) {
                textAreas[i].onkeydown = function (e) {
                    if(!(e.keyCode == 8)) {
                        maxLength = this.attributes['maxlength'].value;
                        countText(this, maxLength);
                        return this.innerText.length < maxLength;
                    }

                };
                textAreas[i].onkeyup = function () {
                    maxLength2 = this.attributes['maxlength'].value;
                    copyPastePrevent(this, maxLength2);
                    countText(this, maxLength2);
                };
            }
        }());
        var countText = selector?function (obj, maxChar) {
            text_remaining = maxChar - $(obj).text().length;
            $(obj).next(that.selector).html(text_remaining + charTxt);
        }:function(){ 
            return false 
        };
        var copyPastePrevent = function (obj, max) {
            var chopped;
            if ($(obj).text().length > max) {
                chopped = $(obj).text().substring(0, max);
                $(obj).html(chopped);
            }
        };
    }());
};
