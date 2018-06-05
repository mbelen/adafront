
$('#cargar').on('click',e=>{
	e.preventDefault();
//	let tipovehiculo = $('.tipovehiculo').val();
	let tipovehiculo = $('input:radio.tipovehiculo:checked').val();	
	let patente = $('#patente').val();
	let marca = $('#marca').val();
	let modelo = $('#modelo').val();
	let calle = $('#calle').val();
	let diahora = $('#diahora').val();
	let oficial = $('#oficial').val();
//	let motivo = $('.motivo').val();
	let motivo = $('input:checkbox.motivo:checked').val();	
	let motivotxt = $('#motivotxt').val();
	

	

	console.log(tipovehiculo, patente, marca, modelo, calle, diahora, oficial, motivo, motivotxt);
});


