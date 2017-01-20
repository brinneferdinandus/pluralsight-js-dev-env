import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

result.forEach(user => {
  usersBody+= `<tr>
  <td><a href="#' data-id="
})
})

//import './index.css';

//import numeral from 'numeral';

//const courseValue = numeral(1000).format('$0,0.00');
//console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-consolen
