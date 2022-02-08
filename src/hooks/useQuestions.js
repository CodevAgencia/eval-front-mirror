/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useAuth } from './useAuth';
import { LOAD_THEMATICS_FORM, SAVE_RESPONSES_FORM } from '../common/actions';

export const useQuestions = (groupId) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { questions, status } = useSelector((state) => state.appForm);

  const saveResponses = (responses) => {
    const parsedResponses = Object.keys(responses).map((key) => ({
      value: responses[key],
      questionId: questions?.find((q) => q.code === key)?.id,
    }));
    dispatch({
      type: SAVE_RESPONSES_FORM,
      payload: {
        userId: user.id,
        newStatus: groupId + 1,
        responses: parsedResponses,
      },
    });
  };

  const loadQuestions = () => {
    dispatch({
      type: LOAD_THEMATICS_FORM,
      payload: {
        userId: user.id,
        groupId,
      },
    });
  };

  useEffect(loadQuestions, [groupId]);

  return {
    questions,
    saveResponses,
    currentStatus: status,
  };
};
