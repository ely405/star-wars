'use strict';

const createOption = (array)=>{
  let select = $('<select/>');
  let defaultOption = $('<option/>',{'hidden':''}).html('selecciona una especie');
  select.append(defaultOption);
  $.each(array, (index, element)=>{
    let people = element.people[0];
    let familyOption = $('<option/>',{'val':people.slice(people.length-3)}).html(element.name);
    console.log(element.people[0]);
    console.log(people.length);
    console.log(people.slice(people.length-3));
    select.append(familyOption);
  });
  return select;
}
