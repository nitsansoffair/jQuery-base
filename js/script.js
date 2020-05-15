$(function () {
    const pokeapiUrl = 'https://pokeapi.co/api/v2/generation/1';

    $.getJSON(pokeapiUrl)
        .done(function (data) {
            $.each(data.pokemon_species, function (index, pokemon) {
                const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                const par = $('<p>').html("Pokemon " + (index + 1) + " is " + name);
                par.appendTo('#pokemon');
            });
        })
        .fail(function () {
            console.log('fail');
        })
        .always(function () {
            console.log('Pokemon');
        });
});
