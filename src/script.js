const form = document.querySelector('.form')
form.addEventListener('submit', async function(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    await fetch('https://qucv15v8ni.execute-api.eu-west-1.amazonaws.com/dev/items',{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:{
            count: formData.get('count')
        }
    }).then(res => res.json()).catch(err => console.log(err))
})