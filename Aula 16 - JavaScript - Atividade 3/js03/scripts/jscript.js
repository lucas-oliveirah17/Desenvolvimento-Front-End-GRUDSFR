/*Criar os objetos para os elementos que serão manipulados: */
const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')

const array_titulos = document.querySelectorAll('.titulo')

const obj_div_modal = document.querySelector('#div_modal')
const obj_bt_fechar = document.querySelector('#p_fechar span')
const array_img = document.querySelectorAll('#linguagens img')
const obj_img_modal = document.querySelector('#img_modal')
const obj_p_modal = document.querySelector('#p_modal')
/*#########################################################################*/
/*Adicionar os evento para chamar as funções: */
obj_num_largura.addEventListener('change', funRedimensionaPoligono)
obj_num_altura.addEventListener('change', funRedimensionaPoligono)

for (obj_titulo of array_titulos) {
    obj_titulo.addEventListener('click', function() {funExibeTexto(this)})
}

for (obj_img of array_img) {
    obj_img.addEventListener('click', function() { funExibeModal(this.src, this.alt) } )
}
obj_bt_fechar.addEventListener('click', funFechaModal)

/*#########################################################################*/
/*Declarar as funções para executar as ações: */
function funRedimensionaPoligono() {
 if(obj_num_largura.value < 50 || obj_num_largura.value > 100 || obj_num_altura.value < 50 || obj_num_altura.value > 100 ) {
    alert('Valores inválidos!') 
 }
 else {
    obj_div_poligono.style.width = obj_num_largura.value + 'px'
    obj_div_poligono.style.height = obj_num_altura.value + 'px'
    let area = obj_num_largura.value * obj_num_altura.value
    obj_div_poligono.innerHTML = 'Área: ' + area + 'px²'
    let perim = parseInt (obj_num_largura.value) + parseInt (obj_num_largura.value) + parseInt (obj_num_altura.value) + parseInt (obj_num_altura.value) /*Pode usar também o parseFloat*/
    obj_p_perimetro.innerHTML = 'Perímetro: ' + perim + 'px'
 } 
}

function funExibeTexto(par_titulo) {
    const obj_texto = par_titulo.children[0]
    if(obj_texto.style.display == 'flex') {
        obj_texto.style.display = 'none'
    }
    else {
        obj_texto.style.display = 'flex'
    }
}

function funExibeModal(par_src, par_alt) {
    obj_img_modal.setAttribute('src', par_src)
    obj_img_modal.setAttribute('alt', par_alt)
    obj_img_modal.setAttribute('title', par_alt)
    obj_p_modal.innerHTML = par_alt
    obj_div_modal.style.display = 'block'
}

function funFechaModal() {
    obj_div_modal.style.display = 'none'
}