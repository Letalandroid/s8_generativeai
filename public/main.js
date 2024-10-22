const btnGen = document.querySelector('#btnGen');
const p = document.querySelector('#prompt');
const res = document.querySelector('#response');

btnGen.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await fetch('/gen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: p.value })
    });

    if (res.status == 200) {
        const data = await res.json();
        console.log(data);        
        response.innerHTML = data.response;
    } else {
        res.innerHtml = res.status;
        alert('Error en la consulta');
    }
})