package com.propellerhead.controller;

import com.propellerhead.domain.CustomerDO;
import com.propellerhead.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;

/**
 * Created by gaoshan on 26/02/19.
 */
public class BaseController {

    @Autowired
    CustomerService customerService;

    public Long getCustomerId(Long customerId){
        CustomerDO customerDO = customerService.get(customerId);
        if(customerDO == null)
            return 0l;
        else
            return customerDO.getCustomerId();
    }

    public String returnErrorPage(String msg, Model model){
        model.addAttribute("errMsg", "The customer is not existed");
        return "error";
    }
}
