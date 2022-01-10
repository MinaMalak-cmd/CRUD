import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const get = id => {
  return http.get(`/users/${id}`);
};

const _post = data => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const _delete = id => {
  return http.delete(`/users/${id}`);
};


export default {
  getAll,
  get,
  post :_post,
  update,
  delete: _delete
};