import axiosCustom from "../../../app/common/components/apiConfig";

export function removeToBasketUpdate(data) {
  let config = {
    url: "update_request"
  };

  let _data = {
    table: "gift",
    method_type: "remove_from_basket",
    data: data ? data : {}
  };

  return axiosCustom(config, _data);
}
