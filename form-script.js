const scriptURL = 'https://script.google.com/macros/s/AKfycbxp5Glg7ASL4HEX9JOZVi1ZS_vHe4UMnXDJXOpEj1p4K56tVfk6JD0mLopswF8L0uJa/exec'
      const form = document.forms['order-form']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })