var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users",
};

usersService.userLogin = (payload) => {
  const config = {
    method: "POST",
    url: usersService.endpoint + "/login",
    data: {
      email: "byronpc@sabio.la",
      password: "Password12345!!",
      tenantId: "U06CJSS6EH0"
    },
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
usersService.current = () => {
  const config = {
    method: "GET",
    url: usersService.endpoint + "/current",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};
//     {
//   "firstName": "Byron",
//   "lastName": "Luke",
//   "email": "byronpc@sabio.la",
//   "password": "Password12345!!",
//   "passwordConfirm": "Password12345!!",
//   "avatarUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marca.com%2Fen%2Flifestyle%2Fcelebrities%2F2022%2F10%2F23%2F635539ac46163f61ad8b4583.html&psig=AOvVaw1CtPZP4FKzLlmC47mrmRvt&ust=1706046626780000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCPjL9Yr98YMDFQAAAAAdAAAAABAE",
//   "tenantId": "U06CJSS6EH0"
// }