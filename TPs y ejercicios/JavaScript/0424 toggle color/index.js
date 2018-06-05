/* listener row 1 negro a rojo */
$('#1').on('click', function (e) {
	$('#1').toggleClass('rojo negro');
});

/* listener row 2 verde2 a amarillo3 */
$('#2').on('click', function (e) {
	$('#3').toggleClass('amarillo verde');
});

$('#3').on('click', function (e) {
	$('#2').toggleClass('amarillo verde');
});

/* listener row 3 negro a rojo */
$('#5').on('click', function (e) {
	$('#4').toggleClass('violeta rojo');
	$('#6').toggleClass('violeta rojo');
});

