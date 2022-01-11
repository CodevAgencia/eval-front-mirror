import TargetPopulation from '../components/Market/TargetPopulation';
import LengthMarket from '../components/Market/LengthMarket';
import EntryBarriers from '../components/Market/EntryBarriers';
import ExpansionPlan from '../components/Market/ExpansionPlan';
import LocalRegionalCompetitors from '../components/Market/LocalRegionalCompetitors';

const Market = () => {
  return (
    <div>
      <TargetPopulation />
      <LengthMarket />
      <EntryBarriers />
      <ExpansionPlan />
      <LocalRegionalCompetitors />
    </div>
  );
};

export default Market;
