import { Footer } from '~/components/Footer';
import { Blog } from '~/components/pages/Home/sections/Blog';
import { WhatWeDo } from '~/components/pages/Home/sections/WhatWeDo';

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: '#000', height: '300px' }}>Always Be in touch</div>
      <WhatWeDo />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
