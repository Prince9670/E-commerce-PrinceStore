import HeroSection from './components/HeroSection';
import {useProductContext} from './context/ProductContext'

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Prince Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection mydata={data} />
    </>
  );
};

export default About;