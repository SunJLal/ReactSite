import 'tw-elements';
import './App.css';

import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { HomeHero } from './components/HomeHero/HomeHero';
import { LogoRow } from './components/LogoRow/LogoRow';
import { WhatIDoRow } from './components/WhatIDoRow/WhatIDoRow';
import { ProjectsRow } from './components/ProjectsRow/ProjectsRow';
import { PhotographyRow } from './components/PhotographyRow/PhotographyRow';
import { TestimonialRow } from './components/TestimonialRow/TestimonialRow';
import { FooterRow } from './components/FooterRow/FooterRow';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <HomeHero />
      <LogoRow />
      <WhatIDoRow />
      <ProjectsRow />
      <PhotographyRow />
      <TestimonialRow />
      <FooterRow />
    </div>
  );
}

export default App;
