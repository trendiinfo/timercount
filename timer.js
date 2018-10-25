$(document).ready(function() {
var detik = 3;
var menit = 1;
function hitung() {
setTimeout(hitung,1000);
$('#tampilkan').html( ' habis waktu ' + menit + ' menit ' + detik + ' detik ');
detik --;
if(detik < 0) {
detik = 59;
menit --;
if(menit < 0) {
menit = 0;
detik = 0;
}
}
}
hitung();
});