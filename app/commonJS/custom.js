"use client";
import { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class TourLogic extends Component {
  componentDidMount() {
    this.setupMenuToggle();
    this.initAOS();
    this.initProgressBar();
    this.setupFixedHeader();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    const menuBtn = document.querySelector('.menuBtn');
    if (menuBtn) menuBtn.removeEventListener('click', this.toggleMenu);

    const progressWrap = document.querySelector('.progress-wrap');
    if (progressWrap) {
      progressWrap.removeEventListener('click', this.scrollToTop);
    }
  }

  setupMenuToggle = () => {
    const menuBtn = document.querySelector('.menuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', this.toggleMenu);
    }
  };

  toggleMenu = () => {
    const btn = document.querySelector('.menuBtn');
    const menu = document.querySelector('.menuMoreContainer');
    const header = document.querySelector('.header');
    const body = document.body;

    btn?.classList.toggle('closeMenuBtn');
    menu?.classList.toggle('active');
    header?.classList.toggle('on');
    body?.classList.toggle('overflow-hidden');
  };

  initAOS = () => {
    AOS.init({ duration: 1200 });
  };

  setupFixedHeader = () => {
    this.handleScroll = () => {
      const scrollTop = window.scrollY;
      const header = document.querySelector('.header');
      if (header) {
        if (scrollTop > 50) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      }

      this.updateProgressBar();
    };

    window.addEventListener('scroll', this.handleScroll);
  };

  initProgressBar = () => {
    const progressPath = document.querySelector('.progress-wrap path');
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    this.updateProgressBar = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;

      const progressWrap = document.querySelector('.progress-wrap');
      if (progressWrap) {
        if (scroll > 150) {
          progressWrap.classList.add('active-progress');
        } else {
          progressWrap.classList.remove('active-progress');
        }
      }
    };

    this.updateProgressBar();

    const progressWrap = document.querySelector('.progress-wrap');
    if (progressWrap) {
      progressWrap.addEventListener('click', this.scrollToTop);
    }
  };

  scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return null;
  }
}

export default TourLogic;
