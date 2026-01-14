# Wall Clock

Live Demo: https://theajeetcodes.github.io/wall-clock/

This is a **basic Analog Wall Clock** project built using **HTML, CSS, and JavaScript**.  
The project is created step-by-step to strengthen core frontend fundamentals and understand real-time DOM manipulation.

---

## Folder Structure

wall-clock/  
│-- index.html  
│-- style.css  
│-- script.js  

---

## Project Overview

### index.html
- Clock container and circular layout
- Numbers (1–12) placed around the clock
- Hour, minute, and second hands
- Center dot for realistic clock design
- Linked CSS and JavaScript files

### style.css
- Flexbox used to center the clock
- Circular clock face styling
- Numbers positioned using CSS transforms
- Different sizes and colors for clock hands
- Proper z-index layering

### script.js
- Elements selected using `document.querySelector`
- Real-time time fetched using `Date()`
- Time converted into rotation degrees
- Clock updates every second using `setInterval`

---

## JavaScript Logic

- Seconds rotate: `seconds × 6`
- Minutes rotate: `minutes × 6`
- Hours rotate smoothly using:
  `(hours % 12) × 30 + (minutes × 0.5)`

This ensures accurate and smooth clock movement.

---

## Purpose of This Project

- Practice HTML, CSS, and JavaScript together
- Understand CSS transform & rotation
- Learn real-time updates using JavaScript
- Build confidence with hands-on projects
- Prepare for frontend internships and portfolios

---

## Current Status

- ✔ Clock face completed
- ✔ Numbers aligned around the circle
- ✔ Hour, minute, and second hands working
- ✔ Real-time updates functional
- ✔ Live project deployed using GitHub Pages

---

## Future Improvements (Optional)

- Smooth second-hand animation
- Digital clock display
- Dark / light theme toggle
- Mobile responsiveness

---

## 👤 Author

**Ajeet Yadav**  
Frontend Developer in Progress 🚀

This project will be updated as new frontend concepts are learned and applied.
