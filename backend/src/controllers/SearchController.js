const Dev = require("../models/Dev");
const parseStringAsArrau = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        // Buscar todos os devs em um raio de 10km
        // filtro por tecnologia que trabalha

        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArrau(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        })

        console.log(techsArray);

        return response.json({ devs });
    }
}