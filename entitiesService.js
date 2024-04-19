var entitiesService = {
    endpoint: 'https://api.remotebootcamp.dev/api/entities/movies'
}

entitiesService.getAll = () => {
    console.log("getMovies is executing");
    const config = {
        method: "GET",
        url: entitiesService.endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config);

};

entitiesService.getById = (id) => {
    const config = {
        method: "GET",
        url: entitiesService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config)
}

entitiesService.deleteById = (id) => {
    const config = {
        method: "DELETE",
        url: entitiesService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config).then(() => id)
};

entitiesService.add = payload => {

    const config = {
        method: "POST",
        url: entitiesService.endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config).then((response) => { return { id: response.data.item, ...payload } })
};

entitiesService.update = (id, payload) => {
    const config = {
        method: "PUT",
        url: entitiesService.endpoint + "/" + id,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => { return { id: id, ...payload } })

};

entitiesService.getById = (id) => {
    const config = {
        method: "GET",
        url: entitiesService.endpoint + "/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };

    return axios(config)
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (response) {
    //   console.error(response);
    // });
};
/////////////////////////////////////////////////////////////////////
//F
