const api = "http://localhost:3000/"
async function auths() {
    
    //De forma inserindo os dados de forma manual
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value;
    // console.log("auths");

    // let params = 'username='+username+'&password='+password

    // URLSearchParams Converte os dados convertendo paramentro GET em STRING
    let form = document.querySelector('form');
    let params = new URLSearchParams(new FormData(form)).toString()

    let url = api + "auth/?"+params;
    console.log(url);
    
    const response = await fetch(url)
    const result = await response.json();

    console.log(result);
}
