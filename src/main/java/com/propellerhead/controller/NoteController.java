package com.propellerhead.controller;

import com.propellerhead.domain.NoteDO;
import com.propellerhead.service.NoteService;
import com.propellerhead.utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@RequestMapping("/note")
@Controller
public class NoteController extends BaseController {

    @Autowired
    NoteService noteService;

    String prefix = "note";

    @GetMapping("/{cId}")
    String index(@PathVariable("cId") Long cId, Model model){
        Long customerId = getCustomerId(cId);
        if(customerId == 0){
            return returnErrorPage("The customer is not existed", model);
        }
        model.addAttribute("customerId", customerId);
        return prefix + "/note";
    }

    @GetMapping("/add/{cId}")
    String add(@PathVariable("cId") Long cId, Model model){
        model.addAttribute("customerId", cId);
        return prefix + "/add";
    }

    /**
     *
     * @param nId note Id
     * @param model
     * @return
     */
    @GetMapping("/edit/{nId}")
    String edit(@PathVariable("nId") Long nId, Model model){
        NoteDO note = noteService.get(nId);
        note.setNoteContent(ValidateUtil.decode4Html(note.getNoteContent()));
        model.addAttribute("note", note);
        return prefix + "/edit";
    }

    @PostMapping("/edit/{nId}")
    @ResponseBody
    String detail(@PathVariable("nId") Long nId){
        NoteDO note = noteService.get(nId);
//        note.setNoteContent(ValidateUtil.decode4Html(note.getNoteContent()));
        return JsonUtil.bean2JsonStr(AjaxJsonResponseUtil.buildSuccessResponse(JsonUtil.bean2JsonTree(note)));
    }

    @GetMapping("/list")
    @ResponseBody
    PageUtils list(@RequestParam Map<String, Object> params) {
        Query query = new Query(params);
        List<NoteDO> consultList = noteService.list(query);
        int total = noteService.count(query);
        PageUtils pageUtil = new PageUtils(consultList, total);
        return pageUtil;
    }

    /**
     *
     * @param cId customerId
     * @param note
     * @return
     */
    @PostMapping("/save/{cId}")
    @ResponseBody
    AjaxJsonResponse save(@PathVariable("cId") Long cId, NoteDO note) {
        Long customerId = getCustomerId(cId);
        if(customerId == 0){
            return AjaxJsonResponseUtil.buildIllegalResponse("The customer is not existed");
        }
        note.setCustomerId(customerId);
        note.setNoteContent(ValidateUtil.encode4Html(note.getNoteContent()));
        if(noteService.save(note) > 0){
            return AjaxJsonResponseUtil.buildSuccessResponse();
        }else{
            return AjaxJsonResponseUtil.buildServerErrorResponse("Fail to save a note");
        }
    }

    @PostMapping("/update")
    @ResponseBody
    AjaxJsonResponse update(NoteDO note) {
        note.setNoteContent(ValidateUtil.encode4Html(note.getNoteContent()));
        note.setUpdateDate(new Date());
        if(noteService.update(note) > 0){
            return AjaxJsonResponseUtil.buildSuccessResponse();
        }else{
            return AjaxJsonResponseUtil.buildServerErrorResponse("Fail to update a note");
        }
    }
}
