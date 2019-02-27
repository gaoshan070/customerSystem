package com.propellerhead.constants;

/**
 * Created by gaoshan on 26/02/19.
 */
public enum AjaxResponseReturnCode {

    SUCCESS(1), ILLEGAL_REQUEST(2), SERVER_ERROR(3);

    private int index;

    AjaxResponseReturnCode(int index) {
        this.index = index;
    }

    public int getIndex() {
        return index;
    }
}
