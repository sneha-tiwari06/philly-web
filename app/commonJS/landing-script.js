"use client";
import { Component } from 'react';

class LandingPageAnimations extends Component {
  componentDidMount() {
    this.runLandingAnimations();
  }

  runLandingAnimations = () => {
    setTimeout(() => {
      const bottomTranslate = document.querySelector('.landingPage .bottomTranslate');
      if (bottomTranslate) {
        bottomTranslate.classList.add('doneTranslate');
      }

      setTimeout(() => {
        const landingPage = document.querySelector('.landingPage');
        const overflowEls = document.querySelectorAll('.overflow');

        if (landingPage) {
          landingPage.classList.add('vanished');
        }

        overflowEls.forEach(el => el.classList.remove('overflow'));

        setTimeout(() => {
          const animatedElements = document.querySelectorAll('.landing-verticle__wrapper .animate');

          animatedElements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('doneTranslate');
            }, 150 * (i + 1));
          });
        }, 700);
      }, 1200);
    }, 1700);
  };

  render() {
    return null; // Pure logic, no UI
  }
}

export default LandingPageAnimations;
