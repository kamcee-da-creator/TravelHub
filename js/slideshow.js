// const scrollers = document.querySelectorAll(".scroller");

// if ((!window, matchMedia("(prefers-reduced-motion: reduce)").matches)) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute("data-animated", true);

//     // Duplicate items
//     const scrollerInner = scroller.querySelector(".scroller-inner");
//     const scrollerContent = Array.from(scrollerInner.children);
//     console.log(scrollerContent);

//     // Duplicate the content as needed
//     scrollerContent.forEach((item) => {
//       const clonedItem = item.cloneNode(true);
//       clonedItem.setAttribute("aria-hidden", true);

//       console.log(clonedItem);
//     });
//   });
// }

const scrollers = document.querySelectorAll(".scroller");

// Check if the user prefers reduced motion

addAnimation();
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    // Handle duplication of items
    const scrollerInner = scroller.querySelector(".tag_list");

    const scrollerContent = Array.from(scrollerInner.children);
    console.log(scrollerContent);

    // Duplicate the content as needed
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
