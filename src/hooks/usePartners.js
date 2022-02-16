import { useSelector, useDispatch } from 'react-redux';

import { useAuth } from './useAuth';
import { SAVE_PARTNERS } from '../common/actions';

export const usePartnert = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { partners } = useSelector((state) => state.partners);

  const savePartners = (newPartners) => {
    dispatch({
      type: SAVE_PARTNERS,
      payload: {
        parthers: newPartners,
        userId: user.id,
      },
    });
  };

  return {
    partners,
    savePartners,
  };
};
