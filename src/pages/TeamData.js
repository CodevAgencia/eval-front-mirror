import Experience from '../components/team/Experience';
import ManagementCapacity from '../components/team/Management Capacity';
import FoundersInvolved from '../components/team/FoundersInvolved';
import FoundersParticipation from '../components/team/FoundersParticipation';
import FoundersInvestment from '../components/team/FoundersInvestment';

const TeamData = () => {
  return (
    <div className="w-full flex flex-col justify-center space-y-12">
      <Experience />
      <ManagementCapacity />
      <FoundersInvolved />
      <FoundersParticipation />
      <FoundersInvestment />
    </div>
  );
};

export default TeamData;
