import { useRef } from 'react';

const Main =()=>{
  const shareIconRef = useRef(null);
  const socialIconRef = useRef(null);

  const handleShareClick = () => {
    if (shareIconRef.current) {
      shareIconRef.current.classList.toggle('component__share-button-toggle');
   }
   
    if (socialIconRef.current) {
      socialIconRef.current.classList.toggle('social-icon__toggle');
    }
  };
  
  return (
  <main className="main">
    
    <section className="component">
      <h2 className="component__heading" aria-hidden="true">Component</h2>
      
      <picture className="component__picture">
        <source srcset="drawers.avif" type="image/avif"/>
        <source srcset="drawers.webp" type="image/webp"/>
        <img src="drawers.jpg" alt="Drawer Image" loading="eager" className="component__img"/>
      </picture>
      
      <article className="component__article">
        <h2 className="component__article-heading">
          Shift the overall look and feel by adding these wonderful
          touches to furniture in your home
        </h2>
        
        <p className="component__article-text">
          Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.
        </p>
        
        <div className="component__author-info">
          <img src="avatar-michelle.jpg" width="45" height="45" alt="Michelle avatar" loading="lazy" className="component__author-img"/>
          
          <div className="component__author-more">
            <h3 className="component__author-name">Michelle Appleton</h3>
            
            <p className="component__date">28 Jun 2020</p>
          </div>
            
            {/* Share button */}
            <button type="button" aria-label="Toggle social media share options" aria-pressed="false" className="component__share-button" onClick={handleShareClick}>
              <span className="component__share-icon" ref={shareIconRef}></span>
            </button>
        </div>
      </article>
    </section>
    
    {/* Social media icons */}
    <section className="social-icon" ref={socialIconRef}>
      <h3 className="social-icon__heading">Share</h3>
      <a href="#" className="social-icon__link social-icon__link--facebook" aria-label="Share on Facebook">
        <img src="icon-facebook.svg" alt="Facebook icon" loading="lazy"/>
      </a>
      <a href="#" className="social-icon__link social-icon__link--twitter" aria-label="Share on Twitter">
        <img src="icon-twitter.svg" alt="Twitter icon" loading="lazy"/>
      </a>
      <a href="#" className="social-icon__link social-icon__link--pinterest" aria-label="Share on Pinterest">
        <img src="icon-pinterest.svg" alt="Pinterest icon" loading="lazy"/>
      </a>
    </section>
    
  </main>
  );
}
export default Main;