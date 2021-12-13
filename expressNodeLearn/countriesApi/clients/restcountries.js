const axios = require("axios");
const BASE_URL = "https://restcountries.eu/rest";
const ALL = "/v2/all"
const CODES = "v2/alpha?codes="

const getAllCountries = async () => {
    try {
        const url = `${BASE_URL}${ALL}`;
        const await axios(url);
    } catch (error) {
        throw new Error(error);
    }
}

const getCountriesByIsoCode = async (countriesIsoCode) => {
        try {
        const url = `${BASE_URL}${CODES}${countriesIsoCode}`;
        const await axios(url);
    } catch (error) {
        throw new Error(error);
    }
}

exports.getAllCountries = getAllCountries;
exports.getCountriesByIsoCode = getCountriesByIsoCode;