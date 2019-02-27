package com.propellerhead.utils;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.gson.JsonElement;
import com.google.gson.annotations.SerializedName;
import com.propellerhead.constants.AjaxResponseReturnCode;

/**
 * Created by gaoshan on 26/02/19.
 */
public class AjaxJsonResponse {

    @SerializedName("code")
    private int code = AjaxResponseReturnCode.ILLEGAL_REQUEST.getIndex();
    @SerializedName("msg")
    private String msg = "Success";
    @SerializedName("data")
    private JsonElement data;


    public AjaxJsonResponse(AjaxResponseReturnCode code) {
        this.code = code.getIndex();
    }

    public AjaxJsonResponse(AjaxResponseReturnCode code, JsonElement data) {
        this.code = code.getIndex();
        this.data = data;
    }

    public AjaxJsonResponse(AjaxResponseReturnCode code, String msg) {
        this.code = code.getIndex();
        this.msg = msg;
    }

    public AjaxJsonResponse(AjaxResponseReturnCode code, String msg, JsonElement data) {
        this.code = code.getIndex();
        this.msg = msg;
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public JsonElement getData() {
        return data;
    }

    public void setData(JsonElement data) {
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
