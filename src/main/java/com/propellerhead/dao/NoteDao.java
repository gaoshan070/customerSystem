package com.propellerhead.dao;

import com.propellerhead.domain.NoteDO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * Created by gaoshan on 26/02/19.
 */
@Mapper
public interface NoteDao {

    NoteDO get(Long noteId);

    List<NoteDO> list(Map<String, Object> map);

    int count(Map<String,Object> map);

    int save(NoteDO note);

    int update(NoteDO note);

    int remove(Long noteId);
}
