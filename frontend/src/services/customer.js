import request from "../util/request";
import { PAGE_SIZE, API_HOST } from "../constants";

export function fetch({ offset }) {
  return request(
    `${API_HOST}/customer/list?offset=${offset}&limit=${PAGE_SIZE}`
  );
}

export function refresh(query) {
  let offset = query.offset == 0 ? 0 : (query.offset - 1) * PAGE_SIZE;
  return request(
    `${API_HOST}/customer/list?offset=${offset}&limit=${PAGE_SIZE}&sort=${
      query.sort.sort
    }&order=${query.sort.order}&customerName=${query.filter.name}&email=${
      query.filter.email
    }&status=${query.filter.status}`
  );
}

export function getDetail(id) {
  return request(`${API_HOST}/customer/${id}`, {
    method: "POST"
  });
}

export function update(customer) {
  var formData = new FormData();
  for (var name in customer) {
    formData.append(name, customer[name]);
  }
  return request(`${API_HOST}/customer/update`, {
    method: "POST",
    body: formData
  });
}
