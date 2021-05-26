
async function getCars(url = 'https://localhost:5001/car/models?From=25.05.2021&To=30.05.2021', data = {}){

  const response = await fetch(url,{
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    
  });

  return response.json();
  console.log(response);

}


  



window.onload="getCars()";