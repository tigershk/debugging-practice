function getRandomNumber(maxNumber){
  const randomNumber = Math.floor(Math.random() * Math.floor(maxNumber));
  return randomNumber;
}

function getCompanyName(index){
  const companies = [ 'Google', 'Facebook', 'Amazon', 'Apple', 'Microsoft'];

  return companies[index];
}

function getCompany(index){
  if(!index){
    index = getRandomNumber(4);
  }

  const company = getCompanyName(index);

  return company;
}

function letsGetDebugging( list ){
  let company;
  for(let i = 0; i < 10; i++){
    if(i % 3 === 0){
      company = getRandomNumber(i);
    } else if(i < 5){
      company = getCompany(i);
    } else {
      company = getCompany();
    }

    list.push( company );
  }

  return list;
}

debugger;
const output = letsGetDebugging([]);
debugger;
