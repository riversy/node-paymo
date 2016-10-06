const ENDPOINT_URL = "https://app.paymoapp.com/api";

export default class UrlBuilder {

    build(entity, options = {}) {

        let {
            id = false,
            where = false,
            include = false
        } = options;

        if (!entity){
            throw new Error("Entity name is required.");
        }

        let url = `${ENDPOINT_URL}/${entity}`;
        if (id){
            url = `${url}/${id}`;
        }

        let queryParams = {};

        let whereParamValue = this.getWherePart(where);
        if (whereParamValue){
            queryParams.where = whereParamValue;
        }

        let includeParamValue = this.getIncludePart(include);
        if (includeParamValue){
            queryParams.include = includeParamValue;
        }

        let queryPart = this.buildQuery(queryParams);
        if (queryPart){
            url = `${url}?${queryPart}`;
        }

        return url;
    }

    getWherePart(whereList) {
        if (!whereList){
            return false;
        }

        if (!Array.isArray(whereList)){
            return false;
        }
        if (!whereList.length){
            return false;
        }
        return whereList.join(" and ");
    }

    getIncludePart(includeParts) {
        if (!includeParts){
            return false;
        }

        if (!Array.isArray(includeParts)){
            return includeParts;
        }

        if (!includeParts.length){
            return false;
        }

        return includeParts.join(",");
    }

    buildQuery(params){
        let keys = Object.keys(params);
        if (!keys.length){
            return false;
        }

        let queryParts = [];
        for (let key of keys){
            if (!params[key]){
                continue;
            }

            queryParts.push(`${key}=${params[key]}`);
        }

        if (!queryParts.length){
            return false;
        }

        return queryParts.join("&");
    }
}