let user = {
    name: "Misha",
    years: 18
  };
  let {name, years: age, isAdmin = true} = user;
  alert( name ); 
  alert( age ); 
  alert( isAdmin );