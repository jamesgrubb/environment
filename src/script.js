const form = document.querySelector('.form');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const response = await fetch('https://qucv15v8ni.execute-api.eu-west-1.amazonaws.com/dev/items', {
          method: 'POST',
          body: JSON.stringify({
            count: formData.get('count'),
          }),
        })
          .then((res) => res.json())
          .catch((err) => console.error(err));

        console.log(response);
      });