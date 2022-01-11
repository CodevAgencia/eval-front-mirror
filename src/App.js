import withAppProviders from './withAppProviders';
import Market from './pages/Market';

function App() {
  return (
    <div className="mx-auto mb-8" style={{ width: '90%' }}>
      {/* <GeneralData /> */}
      {/* <TeamData /> */}
      {/* <IdeaBusinessModel /> */}
      {/* <ProductMarket /> */}
      <Market />
      {/* <StepForms /> */}
    </div>
  );
}

export default withAppProviders(App)();
