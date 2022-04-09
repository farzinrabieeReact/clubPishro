import axiosCustom from "../../../app/common/components/apiConfig";

export function basket_compute_gift_update(data) {
  let config = {
    url: "update_request"
  };

  let _data = {
    table: "gift",
    method_type: "compute_basket_gift",
    data: data ? data : {}
  };

  return axiosCustom(config, _data);
}
