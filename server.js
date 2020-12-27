const express = require("express");
const cors = require("cors");
const app = express();
const pokemons = require("./pokedex.json");

app.get("/pokemons", function(request, response) {
  return response.json(pokemons);
});


app.get("/pokemons/:id", function(request, response) {
    return response.json(pokemons[`${request.params.id -1}`])
})

const port = process.env.port || 4242
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
