(function() {
  'use strict';

  var price = document.getElementById('price');
  var num = document.getElementById('num');
  var unit = document.getElementById('unit');
  var btn = document.getElementById('btn');
  var result = document.getElementById('result');
  var reset = document.getElementById('reset');

  btn.addEventListener('click', function() {
    var payLess;
    var short;
    var payMore;
    var over;
    var str;

    payLess = Math.floor((price.value / num.value) / unit.value) * unit.value;
    short = price.value - (payLess * num.value);
    payMore = Math.ceil((price.value / num.value) / unit.value) * unit.value;
    over = Math.abs(price.value - (payMore * num.value));
    str =
      '一人 ' + payLess + ' 円だと ' + short + ' 円足りません。' +
      '一人 ' + payMore + ' 円だと ' + over + ' 円余ります。';
    result.textContent = str;
  });
})();
