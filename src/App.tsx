import LandingPage from './pages/landing-page/landingPage';
import ExperiencesPage from './pages/experiences-page/experiencesPage';

function App() {
  return (
    <div className="h-screen w-full overflow-auto snap-y snap-mandatory">
      <LandingPage className="snap-start h-screen w-full"/>
      <ExperiencesPage className="snap-start h-screen w-full"/>
    </div>
  );
}

export default App;
