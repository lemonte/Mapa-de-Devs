const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArrau = require("../utils/parseStringAsArray");
// index, show, update, destroy


module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {

        const { github_username, techs, longitude, latitude } = request.body;
        // console.log(github_username);
        const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const { name = login, avatar_url, bio } = apiresponse.data;

            const techsArray = parseStringAsArrau(techs)

            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }

            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }


        // console.log(dev);
        return response.json(dev);
    }
}