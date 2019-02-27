package com.propellerhead.service.impl;

import com.propellerhead.dao.NoteDao;
import com.propellerhead.domain.NoteDO;
import com.propellerhead.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    NoteDao noteDao;

    @Override
    public NoteDO get(Long noteId) {
        return noteDao.get(noteId);
    }

    @Override
    public List<NoteDO> list(Map<String, Object> map) {
        return noteDao.list(map);
    }

    @Override
    public int count(Map<String, Object> map) {
        return noteDao.count(map);
    }

    @Override
    public int save(NoteDO note) {
        return noteDao.save(note);
    }

    @Override
    public int update(NoteDO note) {
        return noteDao.update(note);
    }

    @Override
    public int remove(Long noteId) {
        return noteDao.remove(noteId);
    }
}
