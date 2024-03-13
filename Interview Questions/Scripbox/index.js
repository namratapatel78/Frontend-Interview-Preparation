$(document).ready(function () {
  $('.link').click(function() {
    alert('link clicked');
  });
  $('.add-link').click(function() {
    $('.links').append('<div class="link"> dynamic div </div>');
  });
  
  $('.search-bar').keyup(function(e) {
    console.log("Seach for", e.target.value)
  });

});


// cors errors


let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

const a = 100;
{
	const a = 200;
		{
				const a = 300;
		}
}
console.log(a);



// Tree shaking
// async defer
// deep copy and shallow copy
// Portal in react
// Fragments in react