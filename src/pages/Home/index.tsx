import { Footer } from '~/components/Footer';
import { Blog } from '~/components/pages/Home/sections/Blog';
import { Hero } from '~/components/pages/Home/sections/Hero';
import { Portfolio } from '~/components/pages/Home/sections/Portfolio';
import { Services } from '~/components/pages/Home/sections/Services';
import { WhatWeDo } from '~/components/pages/Home/sections/WhatWeDo';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <div style={{ height: '300px' }}>Always Be in touch</div>
      <WhatWeDo />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
