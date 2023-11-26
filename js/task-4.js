const form = document.querySelector('form.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const inputs = event.target.elements;
  let data = {};
  
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    
    if (input.value.trim() === '') {
      alert('All form fields must be filled in');
      return;
    }
    
    data[input.name] = input.value.trim();
  }
  
  console.log(data);
  form.reset();
}

