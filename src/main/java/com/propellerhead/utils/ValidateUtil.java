package com.propellerhead.utils;

import org.owasp.esapi.ESAPI;
import org.springframework.util.StringUtils;

/**
 * Created by gaoshan on 26/02/19.
 */
public class ValidateUtil {

    public static String encode4Html(String input) {
        if (StringUtils.isEmpty(input))
            return "";
        return ESAPI.encoder().encodeForHTML(input);
    }

    public static String decode4Html(String input) {
        if (StringUtils.isEmpty(input))
            return "";
        return ESAPI.encoder().decodeForHTML(input);
    }
}
