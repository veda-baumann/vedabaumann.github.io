// ==================================================================================
// MIS 2201 PHASE 1: PERSONAL WEBSITE JAVASCRIPT
// ==================================================================================
//
// FILE: script.js
// PURPOSE: Adds interactivity and dynamic features to your website
//
// WHAT THIS FILE DOES:
// - Mobile navigation (hamburger menu)
// - Smooth scrolling for anchor links
// - Fade-in animations when scrolling
// - Highlights current page in navigation
// - Form validation (if you add a contact form)
// - Various optional enhancements (commented out)
//
// ==================================================================================
//
// JAVASCRIPT BASICS FOR STUDENTS
// ==================================================================================
//
// JavaScript makes websites interactive. It runs in the browser and can:
// - Respond to user actions (clicks, scrolling, typing)
// - Change HTML content dynamically
// - Add/remove CSS classes to change styling
// - Validate forms before submission
// - Create animations and effects
//
// BASIC SYNTAX:
// ```
// // This is a comment (ignored by browser)
// 
// // Select an HTML element
// const element = document.querySelector('.my-class');
// 
// // Add an event listener (wait for user action)
// element.addEventListener('click', function() {
//     // Code to run when element is clicked
//     element.classList.toggle('active');
// });
// ```
//
// ==================================================================================
//
// DO YOU NEED TO MODIFY THIS FILE?
// ==================================================================================
//
// **NO! You don't need to change any JavaScript to complete Phase 1.**
//
// This file already includes all required functionality:
// - Mobile navigation works
// - Smooth scrolling works
// - Animations work
// - Everything is ready to go!
//
// HOWEVER, if you want to add custom features, you can:
// - Uncomment optional features (scroll-to-top button, typing effect, etc.)
// - Add your own event listeners
// - Create custom animations
// - Add interactive elements
//
// WARNING: BE CAREFUL: JavaScript errors can break your entire website!
// - Test frequently in browser console (F12 → Console tab)
// - Check for red error messages
// - If something breaks, undo your last change
//
// ==================================================================================
//
// UNDERSTANDING THE CODE STRUCTURE
// ==================================================================================
//
// This file is organized into sections:
//
// 1. DOM CONTENT LOADED EVENT
//    - Ensures HTML is fully loaded before JavaScript runs
//    - Everything inside runs AFTER the page loads
//
// 2. MOBILE NAVIGATION
//    - Hamburger menu toggle
//    - Menu close when clicking links
//
// 3. SMOOTH SCROLLING
//    - Smooth page scrolling for anchor links
//
// 4. FADE-IN ANIMATIONS
//    - Cards and sections fade in when scrolled into view
//    - Uses Intersection Observer API
//
// 5. CURRENT PAGE HIGHLIGHTING
//    - Highlights current page in navigation menu
//
// 6. OPTIONAL FEATURES (commented out)
//    - Scroll-to-top button
//    - Typing effect
//    - Skill bars animation
//
// 7. UTILITY FUNCTIONS
//    - Debounce function for performance
//    - Other helper functions
//
// ==================================================================================
//
// KEY CONCEPTS EXPLAINED
// ==================================================================================
//
// DOM (Document Object Model):
// - The DOM is the structure of your HTML page
// - JavaScript can access and modify the DOM
// - Example: document.querySelector('.navbar') finds the navbar element
//
// EVENT LISTENERS:
// - Wait for user actions (click, scroll, hover, etc.)
// - Run code when the action happens
// - Example: button.addEventListener('click', function() { ... })
//
// CLASSES (classList):
// - Add/remove CSS classes to change element styling
// - Example: element.classList.add('active') adds the "active" class
//
// query SELECTOR:
// - Finds HTML elements using CSS selectors
// - querySelector: Returns first match
// - querySelectorAll: Returns all matches
//
// ARROW FUNCTIONS:
// - Shorter syntax for functions
// - Old: function() { }
// - New: () => { }
//
// ==================================================================================
//
//  DEBUGGING TIPS
// ==================================================================================
//
// If something doesn't work:
//
// 1. OPEN BROWSER CONSOLE (F12 or Right-click → Inspect → Console)
//    - Look for red error messages
//    - Read the error message carefully
//
// 2. USE console.log() TO DEBUG
//    - Add: console.log('This code ran!');
//    - Check if it appears in console
//
// 3. CHECK FOR TYPOS
//    - JavaScript is case-sensitive
//    - .navbar vs .Navbar are different!
//
// 4. VERIFY HTML CLASSES EXIST
//    - If querySelector('.my-class') returns null, the element doesn't exist
//    - Check your HTML file for the correct class name
//
// 5. COMMENT OUT CODE TO ISOLATE PROBLEM
//    - Use /* */ to temporarily disable code
//    - Narrow down which section causes the error
//
// ==================================================================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // ===== MOBILE NAVIGATION TOGGLE =====
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only apply to #section links, not just #
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== FADE IN ANIMATION ON SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.hobby-card, .reason-card, .highlight-item, .company-card, .resume-section');
    animatedElements.forEach(el => observer.observe(el));

    // ===== CURRENT PAGE HIGHLIGHTING IN NAV =====
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ===== FORM VALIDATION (if you add a contact form) =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation example
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });

            if (isValid) {
                alert('Form submitted successfully!');
                form.submit();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });

    // ===== SKILL BARS ANIMATION (Optional Enhancement) =====
    // Uncomment if you add skill progress bars to your resume
    /*
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%';
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
    */

    // ===== IMAGE LAZY LOADING =====
    // Modern browsers support native lazy loading, but here's a fallback
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===== DYNAMIC YEAR IN FOOTER =====
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ===== SCROLL TO TOP BUTTON (Optional) =====
    // Uncomment to add a scroll-to-top button
    /*
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 1000;
    `;
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    */

    // ===== CONSOLE MESSAGE (Optional Fun) =====
    console.log('%cWelcome to my portfolio!', 'color: #7a0019; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt for MIS 2201 - Spring 2026', 'color: #6b7280; font-size: 14px;');
    console.log('%cUniversity of Minnesota Duluth', 'color: #6b7280; font-size: 14px;');

});

// ===== ADDITIONAL INTERACTIVE FEATURES =====

// Example: Typing effect for hero text (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Usage example (uncomment to use):
// const heroTitle = document.querySelector('.hero h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText);
// }

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Example usage of debounce with scroll event:
// window.addEventListener('scroll', debounce(function() {
//     console.log('Scrolling...');
// }));
