import lazyframe from "lazyframe";

let elements = document.querySelectorAll( '.frame-before' );

lazyframe(elements, {
	debounce: 1000,
	lazyload: true,
	autoplay: true
})

console.log( elements )