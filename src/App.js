import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

document.addEventListener("DOMContentLoaded", function() {
  const titles = document.querySelectorAll('.section__title');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('appear');
              observer.unobserve(entry.target);
          }
      });
  };

  const observer = new IntersectionObserver(callback, options);

  titles.forEach(title => {
      observer.observe(title);
  });
});



const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
