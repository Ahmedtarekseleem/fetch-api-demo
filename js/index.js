async function getdata(re) {
    let data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${re}`)
    let result = await data.json()
    console.log(result);
    display(result.recipes
    )
}
getdata("pizza")
// getdata("pizza")
function display(data) {
    let cartona = ''
    for (let i = 0; i < data.length; i++) {
        cartona += `<div class="col-4" >
        <img src="${data[i].image_url}" class="w-100 h-50" alt="">
        <p>${data[i].title}</p>
                </div>
                `
    }
    document.getElementById('u').innerHTML = cartona
}
let Recipename=document.getElementById("Recipename")
Recipename.addEventListener('change',function(){
    console.log(Recipename.value)
    getdata(`${Recipename.value}`)
})