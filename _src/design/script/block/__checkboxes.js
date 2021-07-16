(() => {
  // ///////////////////////////////////////// checkboxes

  const checkboxes = document.querySelectorAll('[data-js="checkbox-label"]');

  if(checkboxes.length > 0) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (evt) => {
        setTimeout(() => {
          evt.target.previousElementSibling.blur();
        })
      })
    });
  }

})();
