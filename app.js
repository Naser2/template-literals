

  const name = "Ben";
  const age =  23;
  const work = 'Web Developer';
  const city =  'New Jersey';
  let html;

  // Without template strings (es5)
  html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li> work: '+ work + ' </li><li>City: '+ city +' </li></ul>';

  html = '<ul>' +
         '<li>Name: ' + name + '</li>' +
         '<li>Age: ' + age + '</li>' +
         '<li>work: ' + work + '</li>' +
         '<li>City: ' + city + '</li>' +
         '</ul>';

  function hello(){
    return 'hello';
  }

  // With template strings (es6)

    // console.log(person.name);
    function greet(){
      return "Hello World"
    };

html =
    `<ul>
           <li> Name: ${name}    </li>
           <li> Age:  ${age}     </li>
           <li> work: ${work}    </li>
           <li> City: ${city}    </li>
           <li> Math: ${2 + 2}   </li>
           <li> Greet: ${greet()} </li>
           <li> Ternary: ${age > 24 ? 'You are doing well for yourself' : 'You have some time ahead' }    </li>
       </ul>
       `;




document.body.innerHTML = html;
