const axios = require('axios');
module.exports.index = async (request, response) => {
    try {
        const { data } = await axios.get('https://api.edamam.com/api/nutrition-data', {
            params: {
                app_id: 'c01e2d6f',
                app_key: 'f5ef2794e70ef81b4ef13e618f574cf2',
                'nutrition-type': 'logging',
                ingr: 'string',
            },
        });

        response.json(data);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Server Error' });
    }
};
