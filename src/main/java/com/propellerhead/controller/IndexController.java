package com.propellerhead.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by gaoshan on 26/02/19.
 */
@RequestMapping("/")
@Controller
public class IndexController {

    @GetMapping("")
    String index(Model model) {
        return  "index";
    }
}
