document.addEventListener('DOMContentLoaded', function () {
  let favicon_txt = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%EMOJI%</text></svg>`
  let favicon_el = document.head.querySelector('#favicon');
  let sections = Array.from(document.querySelectorAll('section[data-icon]'));
  let last_active_section = null;
  let YEAR_NOW = new Date().getFullYear().toFixed(0);
  let years_working = document.querySelector(".js-years-working");
  let all_time_since = document.querySelectorAll(".js-time-since");

  function set_favicon(emoji) {
    let txt = favicon_txt.replace('%EMOJI%', emoji);
    favicon_el.setAttribute('href', txt);
  }

  window.addEventListener('scroll', function (event) {
    let sections_in_view = sections.filter((section) => section.offsetTop <= window.pageYOffset);
    let active_section = sections_in_view[sections_in_view.length - 1];
    if (last_active_section != active_section) {
      last_active_section = active_section;
      set_favicon(active_section.dataset.icon);
    }
  });

  all_time_since.forEach((element, key) => {
    let year = element.dataset.year;

    if (year) {
      try {
        let year_num = parseInt(year);
        element.textContent = YEAR_NOW - year_num;
      } catch (err) {
        console.log("Error calculating year: ", err);
      }
    }
  })

  if (years_working) {
    years_working.textContent = YEAR_NOW - 2009;
  }
});
