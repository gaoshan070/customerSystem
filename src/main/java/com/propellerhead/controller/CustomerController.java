package com.propellerhead.controller;

import com.propellerhead.domain.CustomerDO;
import com.propellerhead.domain.NoteDO;
import com.propellerhead.utils.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@RequestMapping("/customer")
@Controller
public class CustomerController extends BaseController {

    String prefix = "customer";

    @GetMapping("")
    String index(Model model) {
        return  prefix + "/customer";
    }

    @GetMapping("/list")
    @ResponseBody
    PageUtils list(@RequestParam Map<String, Object> params) {
        Query query = new Query(params);
        List<CustomerDO> customerList = customerService.list(query);
        int total = customerService.count(query);
        PageUtils pageUtil = new PageUtils(customerList, total);
        return pageUtil;
    }

    @GetMapping("/edit/{cId}")
    String edit(@PathVariable("cId") Long cId, Model model) {
        CustomerDO customer = customerService.get(cId);
        model.addAttribute("customer", customer);
        return  prefix + "/edit";
    }

    @PostMapping("/update")
    @ResponseBody
    AjaxJsonResponse update(CustomerDO customer) {
        if(customer == null){
            return AjaxJsonResponseUtil.buildIllegalResponse("The customer is not existed");
        }
        customer.setUpdateDate(new Date());
        customerService.update(customer);
        return AjaxJsonResponseUtil.buildSuccessResponse();
    }

    @PostMapping("/{id}")
    @ResponseBody
    String detail(@PathVariable("id") Long id) {
        CustomerDO customer = customerService.get(id);
        return JsonUtil.bean2JsonStr(AjaxJsonResponseUtil.buildSuccessResponse(JsonUtil.bean2JsonTree(customer)));
    }


}
