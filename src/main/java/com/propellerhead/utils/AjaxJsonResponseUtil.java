package com.propellerhead.utils;

import com.google.gson.JsonElement;
import com.propellerhead.constants.AjaxResponseReturnCode;
import com.propellerhead.dao.CustomerDao;
import com.propellerhead.domain.CustomerDO;
import com.propellerhead.domain.NoteDO;
import org.springframework.util.StringUtils;

import java.util.Date;

/**
 * Created by gaoshan on 26/02/19.
 */
public class AjaxJsonResponseUtil {

    private AjaxJsonResponseUtil() {
    }

    public static AjaxJsonResponse buildSuccessResponse() {
        return new AjaxJsonResponse(AjaxResponseReturnCode.SUCCESS);
    }

    public static AjaxJsonResponse buildSuccessResponse(JsonElement data) {
        if (data == null)
            return null;
        return new AjaxJsonResponse(AjaxResponseReturnCode.SUCCESS, data);
    }

    public static AjaxJsonResponse buildIllegalResponse(String errorMessage) {
        if (StringUtils.isEmpty(errorMessage))
            return null;
        return new AjaxJsonResponse(AjaxResponseReturnCode.ILLEGAL_REQUEST,
                errorMessage);
    }

    public static AjaxJsonResponse buildServerErrorResponse(String errorMessage) {
        if (StringUtils.isEmpty(errorMessage))
            return null;
        return new AjaxJsonResponse(AjaxResponseReturnCode.SERVER_ERROR,
                errorMessage);
    }

    public static void main(String[] args){
        NoteDO note = new NoteDO();
        note.setNoteId(1l);
        note.setCustomerId(1l);
        note.setNoteContent("asdfs");
        note.setCreateDate(new Date());
        note.setUpdateDate(new Date());
        AjaxJsonResponse response = AjaxJsonResponseUtil.buildSuccessResponse(JsonUtil.bean2JsonTree(note));
        System.out.print(response.getData().toString());
    }
}
