
$('document').ready(function () {
    var jugador = prompt("¡Hola! ¿Cuál es tu nombre?");
    document.getElementById('player').innerHTML = jugador;
    
    /**
     * Shuffle an array using Fisher--Yates shuffling
     *
     * @param {Array} array  Array to shuffle
     * @returns {Array}
     */
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    /**
     * Builds an array mapping the numbers from 0 to wanted - 1 to a random
     * number from 0 to available - 1 (two copies of each so board is complete)
     *
     * @param {number} available  Number of available .PNGs
     * @param {number} wanted     Number of tiles wanted (must be even)
     * @returns {Array.number}
     */
    function buildMapping(available, wanted) {
        var all = [], half;
        for (var i = 0; i < available; i++) {
            all.push(i);
        }
        half = shuffle(all).slice(0, wanted / 2);
        return shuffle($.merge(half, half));
    }

    /** @type {Array.number} */
    var tablero = [];
    /** @type {Array.number} */
    var matchedIds = [];
    /** @type {Array.number} */
    var descubiertasIds = [];
    /** @type {number} */
    var contadorClics = 0;

    /**
     * Add the "jugar" click-handler to every tile
     *
     */
    function setListenersActive() {
        $('.tile').click(function () { jugar(parseInt($(this).attr('data-id'))); });
        
    }

    /**
     * Remove the click-handlers from every tile
     *
     */
    function setListenersPassive() {
        $('.tile').unbind();
    }

    function restart() {
        tablero = buildMapping(36, $('.tile').length);
        matchedIds = [];
        descubiertasIds = [];
        matchedIds = []; 
        $('.tile').attr('src', `img/zorros/dorso.png`);
        setListenersActive();
        contadorClics = 0;
        $('#pares').val((matchedIds.length)/2);
        $('#pares').trigger('p');
        $('#clics').val(contadorClics);
        $('#clics').trigger('p');
        $('#turnos').val(contadorClics/2);
        $('#turnos').trigger('p');

    }

    /**
     * Main click handler
     *
     * @param {number} tileId  Contents of the "data-id" attribute for the element the handler was fired upon
     */
    function jugar(tileId) {
        contadorClics++;
        if (matchedIds.includes(tileId)) {
            alert("Zorrito matcheado");
        } else if (descubiertasIds.includes(tileId)) {
            alert("¡Buscá a su compañera!");
        } else {
            $('#clics').val(contadorClics);
            $('#clics').trigger('p');
            $('#turnos').val(contadorClics/2);
            $('#turnos').trigger('p');
            descubiertasIds.push(tileId);
            $('.tile:nth-child(' + (tileId + 1) + ')').attr('src', `img/zorros/${tablero[tileId]}.png`);
            if (2 === descubiertasIds.length) {
                if (tablero[descubiertasIds[0]] === tablero[descubiertasIds[1]]) {
                    matchedIds.push(descubiertasIds[0]);
                    matchedIds.push(descubiertasIds[1]);
                    $('#pares').val((matchedIds.length)/2);
                    $('#pares').trigger('p');
                    descubiertasIds = [];
                    if (matchedIds.length === tablero.length) {
                        setListenersPassive();
                        setTimeout(function () {
                            if (confirm("¡Ganaste! ¿Jugar de nuevo?")) {
                                restart();
                            }
                        }, 500);
                    }
                } else {
                    setListenersPassive();
                    setTimeout(function () {
                      $('.tile:nth-child(' + (descubiertasIds[0] + 1) + ')').attr('src', `img/zorros/dorso.png`);
                      $('.tile:nth-child(' + (descubiertasIds[1] + 1) + ')').attr('src', `img/zorros/dorso.png`);
                      descubiertasIds = [];
                      setListenersActive();
                    }, 1500);
                }
            }
        }
    }

    restart();
    /*document.getElementById('jugadas').innerHTML = paresEncontrados;
    document.getElementById('pares').innerHTML = (matchedIds.length)/2;
    */

    $('#start').click(function () {
            $('#tablero').css("visibility", "visible");
            $('#detalles').css("visibility", "visible");
            $('#clics').on('p', function(e) {
                $('#contadorClics').text( $(e.target).val() )
              });
            $('#turnos').on('p', function(e) {
                $('#contadorTurnos').text( $(e.target).val() )
              });
            $('#pares').on('p', function(e) {
                $('#contadorPares').text( $(e.target).val() )
              });
        });

    $('#restart').click(function () {
            setListenersPassive();
            restart();
            console.log("restart")
        }); 

}); //doc ready

function allEqual(array) {
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
            return false;
        }
    }
    return true;
}

 


