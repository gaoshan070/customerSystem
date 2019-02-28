import request from "../util/request";
import { API_HOST } from "../constants";

export function fetch(query) {
  let offset = query.offset == 0 ? 0 : (query.offset - 1) * 9;
  return request(
    `${API_HOST}/note/list?offset=${offset}&limit=9&customerId=${
      query.customerId
    }`
  );
}

export function getDetail(id) {
  return request(`${API_HOST}/note/edit/${id}`, {
    method: "POST"
  });
}

export function save(note) {
  {
    /* use formData to encapsulate the object to form-data */
  }
  var formData = new FormData();
  for (var name in note) {
    formData.append(name, note[name]);
  }
  return request(`${API_HOST}/note/save/${note.customerId}`, {
    method: "POST",
    body: formData
  });
}
export function update(note) {
  var formData = new FormData();
  for (var name in note) {
    formData.append(name, note[name]);
  }
  return request(`${API_HOST}/note/update`, {
    method: "POST",
    body: formData
  });
}
