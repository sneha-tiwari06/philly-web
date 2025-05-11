"use client";
import { Component } from 'react';

class ScrollProjectLogic extends Component {
  componentDidMount() {
    this.setupScrollDown();
    this.setupProjectToggle();
    this.checkAndReplaceVideo();
    this.setupScrollAnimations();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setupScrollDown = () => {
    const scrollDownBtn = document.querySelector('.scrollDown');
    const scrollToTarget = document.querySelector('.scrollto');

    if (scrollDownBtn && scrollToTarget) {
      scrollDownBtn.addEventListener('click', () => {
        scrollToTarget.scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  setupProjectToggle = () => {
    const toggleBtns = document.querySelectorAll('.project_toggleBtn');
    const containers = document.querySelectorAll('.projectContainer');

    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        containers.forEach((c) => (c.style.display = 'none'));

        const targetId = btn.getAttribute('data-target');
        const targetContainer = document.getElementById(`project-${targetId}`);
        if (targetContainer) {
          targetContainer.style.display = 'block';
          targetContainer.style.opacity = 0;
          setTimeout(() => {
            targetContainer.style.transition = 'opacity 300ms';
            targetContainer.style.opacity = 1;
          }, 10);
        }
      });
    });
  };

  checkAndReplaceVideo = () => {
    if (window.innerWidth < 426) {
      const video = document.getElementById('banner-video');
      const source = video?.querySelector('source');
      if (source && video) {
        source.setAttribute('src', 'videos/mb-video.mp4');
        video.load();
        video.play().catch(() => {});
      }
    }
  };

  setupScrollAnimations = () => {
    this.handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('[class^="animate-section"]'));

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const scrollTop = window.scrollY;
        const winHeight = window.innerHeight;

        if (scrollTop > offsetTop - winHeight / 1.5) {
          const elements = section.querySelectorAll('.animate');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('doneTranslate');
            }, 150 * (i + 1));
          });
        }
      });
    };

    this.handleScroll(); // Initial check
  };

  render() {
    return null;
  }
}

export default ScrollProjectLogic;
