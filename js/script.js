$(function () {
    const pokeapiUrl = 'https://pokeapi.co/api/v2/generation/1';
    const pokemonByName = 'https://pokeapi.co/api/v2/pokemon/';

    $.getJSON(pokeapiUrl)
        .done(function (data) {
            $.each(data.pokemon_species, function (index, pokemon) {
                const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                const link = $('<a>')
                    .attr('id', pokemon.name)
                    .attr('href', '#')
                    .append(
                        $('<strong>').text(name)
                    );

                const par = $('<p>').html("Pokemon " + (index + 1) + " is ").append(link);

                link.click(function (event) {
                    $.getJSON(pokemonByName + pokemon.name)
                        .done(function (details) {
                            const pokemonDiv = $('#pokemon-details');

                            pokemonDiv.empty();
                            pokemonDiv.append('<h2>' + name + '</h2>');
                            pokemonDiv.append('<img src="' + details.sprites.front_default + '">');
                            pokemonDiv.append('<img src="' + details.sprites.back_default + '">');
                            pokemonDiv.append('<img src="' + details.sprites.front_shiny + '">');
                            pokemonDiv.append('<img src="' + details.sprites.back_shiny + '">');
                        })
                        .fail(function () {});

                    event.preventDefault();
                });

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
