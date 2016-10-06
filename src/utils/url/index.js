const ENDPOINT_URL = "https://app.paymoapp.com/api";

export default class UrlBuilder {

    build(entity, options = {}) {

        let {
            id = false,
            filters = false,
            include = false
        } = options;

        if (!entity){
            throw new Error("Entity name is required.");
        }

        let url = `${ENDPOINT_URL}/${entity}`;
        if (id){
            url = `${url}/${id}`
        }




        return url;
    }
}