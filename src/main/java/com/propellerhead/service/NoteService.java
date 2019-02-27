package com.propellerhead.service;

import com.propellerhead.domain.NoteDO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@Service
public interface NoteService {

    NoteDO get(Long noteId);

    List<NoteDO> list(Map<String, Object> map);

    int count(Map<String, Object> map);

    int save(NoteDO note);

    int update(NoteDO note);

    int remove(Long noteId);
}
