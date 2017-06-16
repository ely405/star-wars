'use strict';

const createOption = (array)=>{
  let select = $('<select/>',{'id':'select-option'});
  let defaultOption = $('<option/>',{'hidden':''}).html('selecciona una especie');
  select.append(defaultOption);
  $.each(array, (index, element)=>{
    let people = element.people[0];
    let familyOption = $('<option/>',{'val':people.slice(people.length-3)}).html(element.name);
    // console.log(element.people[0]);
    // console.log(people.slice(0, people.length-3));
    // console.log(people.slice(0, people.length-3)+people.slice(people.length-3));
    // $.ajax(people.slice(0, people.length-3)+people.slice(people.length-3),{
    //   success: (response)=>{
    //     console.log(response);
    //   }
    // });
    select.append(familyOption);
  });
  return select;
}
