import { useSelector, useDispatch } from 'react-redux';
import { APP_HIDE_MESSAGE } from '../common/actions';

export const useApp = () => {
  const dispatch = useDispatch();
  const { type, message, loading } = useSelector(({ app }) => app);

  const hideMessage = () => {
    dispatch({
      type: APP_HIDE_MESSAGE,
    });
  };

  return {
    type,
    isOpen: !!message,
    message,
    loading,
    hideMessage,
  };
};
