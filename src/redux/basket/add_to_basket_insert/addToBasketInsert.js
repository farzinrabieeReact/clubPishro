import React from "react";
import axiosCustom from "../../../app/common/components/apiConfig";

export function addToBasketInsert(data) {
  let config = {
    url: "insert_request"
  };

  let _data = {
    table: "gift",
    method_type: "add_to_basket",
    data: data ? data : {}
  };

  return axiosCustom(config, _data);
}
