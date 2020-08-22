
// function prettyPrint() {
//   let ugly = document.querySelector('textarea-json').textContent;
//   let obj = JSON.parse(ugly);
//   let pretty = JSON.stringify(obj, undefine, 4);
//   document.querySelector('textarea-json').textContent = pretty;
// }

$(document).ready(() => {

  $('form').submit((event) => {
    event.preventDefault();
    // get values from form elements
    var $form = $(this),
      text = $('form #textarea-json').val().trim(),
      url = $form.attr("action");

    // send the data using post
    $.post(url, { 'textarea-json': text }, (data) => {
      // put the result in its element
      $('#textarea-csv').val(data);
    });
  });

})

console.log('running csv report in the browser');
