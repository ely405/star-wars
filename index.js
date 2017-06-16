'use strict';

const render = (root)=>{
  root.empty();
  root.on('change', $('#select-option'), optionSelected);
  root.append(createOption(state.families));
}

const state = {
  families:null
};

$(_=>{
  $.ajax('http://swapi.co/api/species/',{
    success: (response)=>{
      console.log(response);
      state.families = response.results;
      let root = $('#root');
      render(root);
    }
  });
});
