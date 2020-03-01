var calculator_fields = ["getElementById", "round", "input", "addEventListener", "e+2", "wrapper", "average_fees", "value", "average_COGS", "average_order_value", "purchased", "innerHTML", "average_target", "add_to_cart", "reached_checkout"];

function roundNum(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}

var average_order_value = document.getElementById('average_order_value').value;
var average_fees = document.getElementById('average_fees').value;
var average_COGS = document.getElementById('average_COGS').value;
var profit_target = document.getElementById('average_target').value;
var B2 = average_order_value;
var B3 = average_fees;
var B4 = average_COGS;
var B5 = profit_target;
var add_to_cart = document.getElementById('add_to_cart').value;
var reached_to_checkout = document.getElementById('reached_checkout').value;
var purchased = document.getElementById('purchased').value;
var currency = 1.32;
var B8 = add_to_cart;
var B9 = reached_to_checkout;
var B10 = purchased;
var B13 = currency;
var G2 = (B2 * (100 - B3) / 100 - B4) * B13;
var G3 = G2 * B10 / B9;
var G4 = G2 * B10 / B8;
var G5 = G2 * B10 / 100;
var G6 = B2 / (B2 - B4 - B2 * B3 / 100);
var K2 = (B2 * (100 - B3) / 100 - B4 - B2 * (B5 / 100)) * B13;
var K3 = K2 * B10 / B9;
var K4 = K2 * B10 / B8;
var K5 = K2 * B10 / 100;
var K6 = B2 / (K2 / B13);

document.getElementById('1').innerHTML = '$' + roundNum(G2);
document.getElementById('2').innerHTML = '$' + roundNum(G3);
document.getElementById('3').innerHTML = '$' + roundNum(G4);
document.getElementById('4').innerHTML = '$' + roundNum(G5);
document.getElementById('5').innerHTML = roundNum(G6 * 100 - 100) + '%';
document.getElementById('1b').innerHTML = '$' + roundNum(K2);
document.getElementById('2b').innerHTML = '$' + roundNum(K3);
document.getElementById('3b').innerHTML = '$' + roundNum(K4);
document.getElementById('4b').innerHTML = '$' + roundNum(K5);
document.getElementById('5b').innerHTML = roundNum(K6 * 100 - 100) + '%';

document.getElementById('wrapper').addEventListener('input', function (_0x1be9b7) {
  var _0x2eaf78 = document.getElementById('average_order_value').value;
  var _0x4ad6d9 = document.getElementById('average_fees').value;
  var _0x1bd4cd = document.getElementById('average_COGS').value;
  var _0x1d09ab = document.getElementById('average_target').value;
  var _0x452cde = _0x2eaf78;
  var _0x22a151 = _0x4ad6d9;
  var _0x34749b = _0x1bd4cd;
  var _0x3d46bc = _0x1d09ab;
  var _0x5935da = document.getElementById('add_to_cart').value;
  var _0x114c17 = document.getElementById('reached_checkout').value;
  var _0x67e04d = document.getElementById('purchased').value;
  var _0x25b82c = 1.32;
  var _0x1c0d5f = _0x5935da;
  var _0x336c30 = _0x114c17;
  var _0x1abb00 = _0x67e04d;
  var _0x33564d = _0x25b82c;
  var _0x2f1816 = (_0x452cde * (100 - _0x22a151) / 100 - _0x34749b) * _0x33564d;
  var _0x15b25f = _0x2f1816 * _0x1abb00 / _0x336c30;
  var _0x108549 = _0x2f1816 * _0x1abb00 / _0x1c0d5f;
  var _0x490860 = _0x2f1816 * _0x1abb00 / 100;
  var _0x461ad2 = _0x452cde / (_0x452cde - _0x34749b - _0x452cde * _0x22a151 / 100);
  var _0x2d01c4 = (_0x452cde * (100 - _0x22a151) / 100 - _0x34749b - _0x452cde * (_0x3d46bc / 100)) * _0x33564d;
  var _0x4be429 = _0x2d01c4 * _0x1abb00 / _0x336c30;
  var _0x2badae = _0x2d01c4 * _0x1abb00 / _0x1c0d5f;
  var _0x163b1b = _0x2d01c4 * _0x1abb00 / 100;
  var _0x5bbeda = _0x452cde / (_0x2d01c4 / _0x33564d);

  document.getElementById('1').innerHTML = '$' + roundNum(_0x2f1816);
  document.getElementById('2').innerHTML = '$' + roundNum(_0x15b25f);
  document.getElementById('3').innerHTML = '$' + roundNum(_0x108549);
  document.getElementById('4').innerHTML = '$' + roundNum(_0x490860);
  document.getElementById('5').innerHTML = roundNum(_0x461ad2 * 100 - 100) + '%';
  document.getElementById('1b').innerHTML = '$' + roundNum(_0x2d01c4);
  document.getElementById('2b').innerHTML = '$' + roundNum(_0x4be429);
  document.getElementById('3b').innerHTML = '$' + roundNum(_0x2badae);
  document.getElementById('4b').innerHTML = '$' + roundNum(_0x163b1b);
  document.getElementById('5b').innerHTML = roundNum(_0x5bbeda * 100 - 100) + '%';
});
