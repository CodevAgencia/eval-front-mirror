import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import General from '../components/GeneralData/General';
import PreviousSituation from '../components/GeneralData/PreviousSituation';
import VeracityOfTheData from '../components/GeneralData/VeracityOfTheData';
import { getThematic } from '../store/app/formStructureSlice';

const GeneralData = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ general }) => general);

  useEffect(() => {
    dispatch(getThematic());
  }, [dispatch]);

  return (
    <>
      {form === 'general' && <General />}
      {form === 'previousSituation' && <PreviousSituation />}
      {form === 'veracityOfData' && <VeracityOfTheData />}
    </>
  );
};

export default GeneralData;
