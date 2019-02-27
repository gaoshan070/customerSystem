import request from "../util/request";
import { PAGE_SIZE, API_HOST } from "../constants";

export function fetch({ offset }) {
  return request(
    `${API_HOST}/customer/list?offset=${offset}&limit=${PAGE_SIZE}`
  );
}

export function refresh(offset) {
  offset = (offset - 1) * PAGE_SIZE;
  return request(
    `${API_HOST}/customer/list?offset=${offset}&limit=${PAGE_SIZE}`
  );
}

export function getDetail(id) {
  return request(`${API_HOST}/customer/${id}`, {
    method: "POST"
  });
}

export function update(customer) {
  return request(`${API_HOST}/customer/update`, {
    method: "POST"
  });
}
