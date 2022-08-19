const hamburgerNav = document.querySelector(".hamburger-nav");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
// Toggle hamburger nav
hamburgerNav.addEventListener("click", () => {
	hamburger.classList.toggle("clicked");
	nav.classList.toggle("visible");
});

const toProjects = document.querySelector(".toProjects");
// Toggle hamburger when clicked on item
toProjects.addEventListener("click", () => {
	hamburger.classList.toggle("clicked");
	nav.classList.toggle("visible");
});

const about = document.querySelectorAll(".about");
const aboutModal = document.querySelector("#modal-about");
const body = document.querySelector("body");
// When an instance of about is clicked open modal and close nav
about.forEach(link => {
	link.addEventListener("click", () => {
		aboutModal.classList.add("show");
		body.style.overflow = "hidden";
		nav.classList.remove("visible");
		hamburger.classList.toggle("clicked");
	});
});

const backButton = document.querySelector("#magnetic-wrap");
// Modal back button
backButton.addEventListener("click", () => {
	body.style.overflow = "auto";
	aboutModal.classList.remove("show");
	contactModal.classList.remove("show");
});
// Magnetic button animation/interaction
var mArea = document.querySelector("#magnetic-area");
// 1. Set the function and variables
function parallaxIt(e, target, movement = 1) {
	var boundingRect = mArea.getBoundingClientRect();
	var relX = e.pageX - boundingRect.left;

	gsap.to(target, {
		x: (relX - boundingRect.width / 2) * movement,
		ease: "power1",
		duration: 0.6,
	});
}
// 2. Call the function
function callParallax(e) {
	parallaxIt(e, "#magnetic-content");
}
// Move back button to mouse position
mArea.addEventListener("mousemove", function (e) {
	callParallax(e);
});
// Set button back to center
mArea.addEventListener("mouseleave", function (e) {
	gsap.to("#magnetic-content", {
		scale: 1,
		x: 0,
		y: 0,
		ease: "power3",
		duration: 0.6,
	});
});

// project detail animations
// check for touch device
const isTouchDevice = () => {
	return window.matchMedia("(pointer: coarse)").matches;
};

const projects = document.querySelectorAll(".project");
// Apply only to the hovered project
projects.forEach(project => {
	const description = project.querySelector(".description");
	const stack = project.querySelector(".stack");
	const link = project.querySelector(".links");

	const expander = project.querySelector(".go-corner");
	const parent = expander.parentElement;

	// No hover on touch screen -> listen to click instead
	if (isTouchDevice()) {
		project.addEventListener("click", () => {
			project.click();
			description.classList.toggle("hide");
			stack.classList.toggle("hide");
			link.classList.toggle("show");

			expander.classList.toggle("reveal");
			parent.parentElement.classList.toggle("reveal");
		});
	}
	// On touchless displays listen to hover
	project.addEventListener("mouseenter", () => {
		description.classList.add("hide");
		stack.classList.add("hide");
		link.classList.add("show");

		expander.classList.add("reveal");
		parent.parentElement.classList.add("reveal");
	});
	project.addEventListener("mouseleave", () => {
		description.classList.remove("hide");
		stack.classList.remove("hide");
		link.classList.remove("show");

		expander.classList.remove("reveal");
		parent.parentElement.classList.remove("reveal");
	});
});

const emailCopys = document.querySelectorAll(".mail");
// copy email adress on click
emailCopys.forEach(emailCopy => {
	const toooltipText = emailCopy.querySelector(".mail .top p");

	emailCopy.addEventListener("click", () => {
		navigator.clipboard.writeText("dudli.tibor@gmail.com");
		toooltipText.textContent = "email copied";
	});
	// set back after clicking
	emailCopy.addEventListener("mouseleave", () => {
		toooltipText.textContent = "click to copy email";
	});
});
