import request from "../util/request";
import { PAGE_SIZE, API_HOST } from "../constants";

export function fetch({ offset, customerId }) {
  return request(
    `${API_HOST}/note/list?offset=${offset}&limit=${PAGE_SIZE}&customerId=${customerId}`
  );
}

export function getDetail(id) {
  return request(`${API_HOST}/note/edit/${id}`, {
    method: "POST"
  });
}
