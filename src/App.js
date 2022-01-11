import withAppProviders from './withAppProviders';
import TeamData from './pages/TeamData';

function App() {
  return (
    <div className="mx-auto mb-8" style={{ width: '90%' }}>
      {/* <GeneralData /> */}
      <TeamData />
      {/* <StepForms /> */}
    </div>
  );
}

export default withAppProviders(App)();
