'use strict';

const showMember = (member)=>{
  $.getJSON('http://swapi.co/api/people/'+member, (response)=>{
    let memberContainer = $('<div/>');
    let nameMember = $('<p/>').html('Hi, my name is' + response.name);
    memberContainer.append(nameMember);
    $('#root').append(memberContainer);
    console.log(response);
  });
}

const optionSelected = ()=>{
  showMember($('#select-option').val());
}
