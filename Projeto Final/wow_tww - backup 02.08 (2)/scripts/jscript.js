const obj_div_modal = document.querySelector('#div_modal');
const obj_bt_fechar = document.querySelector('#p_fechar span');
const array_overview_logo = document.querySelectorAll('#overview_logo img');
const obj_logo_modal = document.querySelector('#logo_modal');

for (obj_overview_logo of array_overview_logo) {
    obj_overview_logo.addEventListener('click', function() {funExibeModal(this.src, this.alt)})
}
obj_bt_fechar.addEventListener('click', funFechaModal);

function funExibeModal(par_src, par_alt) {
    obj_logo_modal.setAttribute('src', par_src);
    obj_logo_modal.setAttribute('alt', par_alt);
    obj_div_modal.style.display = 'block';
}

function funFechaModal() {
    obj_div_modal.style.display = 'none';
}
/*############################################################*/
const obj_thumbnail_1 = document.querySelector('#thumbnail_1');
const obj_thumbnail_2 = document.querySelector('#thumbnail_2');
const obj_botao_play_1 = document.querySelector('#botao_play_1');
const obj_botao_play_2 = document.querySelector('#botao_play_2');
const obj_youtube_video_1 = document.querySelector('#youtube_video_1');
const obj_youtube_video_2 = document.querySelector('#youtube_video_2');

obj_thumbnail_1.addEventListener('click', funIniciaVideo1);
obj_thumbnail_2.addEventListener('click', funIniciaVideo2);

function funIniciaVideo1() {
    let videoUrl = 'https://www.youtube.com/embed/1bfJ0ZjGWoU?autoplay=1';
    obj_youtube_video_1.setAttribute('src', videoUrl);
    obj_youtube_video_1.style.display = 'block';
    obj_thumbnail_1.style.display = 'none';
    obj_botao_play_1.style.display = 'none';
}

function funIniciaVideo2() {
    let videoUrl = 'https://www.youtube.com/embed/KgInN9UhOA0?autoplay=1';
    obj_youtube_video_2.setAttribute('src', videoUrl);
    obj_youtube_video_2.style.display = 'block';
    obj_thumbnail_2.style.display = 'none';
    obj_botao_play_2.style.display = 'none';
}
/*############################################################*/
const obj_bt_dorn = document.querySelector('#bt_dorn');
const obj_bt_deeps = document.querySelector('#bt_deeps');
const obj_bt_fall = document.querySelector('#bt_fall');
const obj_bt_kahet = document.querySelector('#bt_kahet');

const obj_bt_dorn_dot = document.querySelector('#bt_dorn_dot');
const obj_bt_deeps_dot = document.querySelector('#bt_deeps_dot');
const obj_bt_fall_dot = document.querySelector('#bt_fall_dot');
const obj_bt_kahet_dot = document.querySelector('#bt_kahet_dot');

const obj_dorn = document.querySelector('#dorn');
const obj_deeps = document.querySelector('#deeps');
const obj_fall = document.querySelector('#fall');
const obj_kahet = document.querySelector('#kahet');

obj_bt_dorn.addEventListener('click', funAtivaDorn);
obj_bt_deeps.addEventListener('click', funAtivaDeeps);
obj_bt_fall.addEventListener('click', funAtivaFall);
obj_bt_kahet.addEventListener('click', funAtivaKahet);

obj_bt_dorn_dot.addEventListener('click', funAtivaDorn);
obj_bt_deeps_dot.addEventListener('click', funAtivaDeeps);
obj_bt_fall_dot.addEventListener('click', funAtivaFall);
obj_bt_kahet_dot.addEventListener('click', funAtivaKahet);

function funAtivaDorn() {
    obj_dorn.classList.add('active');
    obj_deeps.classList.add('disabled');
    obj_fall.classList.add('disabled');
    obj_kahet.classList.add('disabled');

    obj_dorn.classList.remove('disabled')
    obj_deeps.classList.remove('active');
    obj_fall.classList.remove('active');
    obj_kahet.classList.remove('active');    
}

function funAtivaDeeps() {
    obj_dorn.classList.add('disabled');
    obj_deeps.classList.add('active');
    obj_fall.classList.add('disabled');
    obj_kahet.classList.add('disabled');

    obj_dorn.classList.remove('active');
    obj_deeps.classList.remove('disabled');
    obj_fall.classList.remove('active');
    obj_kahet.classList.remove('active');
}

function funAtivaFall() {
    obj_dorn.classList.add('disabled');
    obj_deeps.classList.add('disabled');
    obj_fall.classList.add('active');
    obj_kahet.classList.add('disabled');

    obj_dorn.classList.remove('active');
    obj_deeps.classList.remove('active');
    obj_fall.classList.remove('disabled');
    obj_kahet.classList.remove('active');
}

function funAtivaKahet() {
    obj_dorn.classList.add('disabled');
    obj_fall.classList.add('disabled');
    obj_deeps.classList.add('disabled');
    obj_kahet.classList.add('active');

    obj_dorn.classList.remove('active');
    obj_fall.classList.remove('active');
    obj_deeps.classList.remove('active');
    obj_kahet.classList.remove('disabled');
}
/*############################################################*/
const obj_bt_delves = document.querySelector('#bt_delves');
const obj_bt_warbands = document.querySelector('#bt_warbands');
const obj_bt_talents = document.querySelector('#bt_talents');
const obj_bt_earthen = document.querySelector('#bt_earthen');
const obj_bt_flying = document.querySelector('#bt_flying');
const obj_bt_dungeons = document.querySelector('#bt_dungeons');

const obj_delves = document.querySelector('#delves');
const obj_warbands = document.querySelector('#warbands');
const obj_talents = document.querySelector('#talents');
const obj_earthen = document.querySelector('#earthen');
const obj_flying = document.querySelector('#flying');
const obj_dungeons = document.querySelector('#dungeons');

obj_bt_delves.addEventListener('click', funAtivaDelves);
obj_bt_warbands.addEventListener('click', funAtivaWarbands);
obj_bt_talents.addEventListener('click', funAtivaTalents);
obj_bt_earthen.addEventListener('click', funAtivaEarthen);
obj_bt_flying.addEventListener('click', funAtivaFlying);
obj_bt_dungeons.addEventListener('click', funAtivaDungeons);

function funAtivaDelves() {
    obj_delves.classList.add('active');
    obj_warbands.classList.add('disabled');
    obj_talents.classList.add('disabled');
    obj_earthen.classList.add('disabled');
    obj_flying.classList.add('disabled');
    obj_dungeons.classList.add('disabled');

    obj_delves.classList.remove('disabled')
    obj_warbands.classList.remove('active');
    obj_talents.classList.remove('active');
    obj_earthen.classList.remove('active');
    obj_flying.classList.remove('active');
    obj_dungeons.classList.remove('active'); 
}

function funAtivaWarbands() {
    obj_delves.classList.add('disabled');
    obj_warbands.classList.add('actived');
    obj_talents.classList.add('disabled');
    obj_earthen.classList.add('disabled');
    obj_flying.classList.add('disabled');
    obj_dungeons.classList.add('disabled');

    obj_delves.classList.remove('active')
    obj_warbands.classList.remove('disabled');
    obj_talents.classList.remove('active');
    obj_earthen.classList.remove('active');
    obj_flying.classList.remove('active');
    obj_dungeons.classList.remove('active'); 
}

function funAtivaTalents() {
    obj_delves.classList.add('disabled');
    obj_warbands.classList.add('disabled');
    obj_talents.classList.add('active');
    obj_earthen.classList.add('disabled');
    obj_flying.classList.add('disabled');
    obj_dungeons.classList.add('disabled');

    obj_delves.classList.remove('active')
    obj_warbands.classList.remove('active');
    obj_talents.classList.remove('disabled');
    obj_earthen.classList.remove('active');
    obj_flying.classList.remove('active');
    obj_dungeons.classList.remove('active'); 
}

function funAtivaEarthen() {
    obj_delves.classList.add('disabled');
    obj_warbands.classList.add('disabled');
    obj_talents.classList.add('disabled');
    obj_earthen.classList.add('active');
    obj_flying.classList.add('disabled');
    obj_dungeons.classList.add('disabled');

    obj_delves.classList.remove('active')
    obj_warbands.classList.remove('active');
    obj_talents.classList.remove('active');
    obj_earthen.classList.remove('disabled');
    obj_flying.classList.remove('active');
    obj_dungeons.classList.remove('active'); 
}

function funAtivaFlying() {
    obj_delves.classList.add('disabled');
    obj_warbands.classList.add('disabled');
    obj_talents.classList.add('disabled');
    obj_earthen.classList.add('disabled');
    obj_flying.classList.add('active');
    obj_dungeons.classList.add('disabled');

    obj_delves.classList.remove('active')
    obj_warbands.classList.remove('active');
    obj_talents.classList.remove('active');
    obj_earthen.classList.remove('active');
    obj_flying.classList.remove('disabled');
    obj_dungeons.classList.remove('active'); 
}

function funAtivaDungeons() {
    obj_delves.classList.add('disabled');
    obj_warbands.classList.add('disabled');
    obj_talents.classList.add('disabled');
    obj_earthen.classList.add('disabled');
    obj_flying.classList.add('disabled');
    obj_dungeons.classList.add('active');

    obj_delves.classList.remove('active')
    obj_warbands.classList.remove('active');
    obj_talents.classList.remove('active');
    obj_earthen.classList.remove('active');
    obj_flying.classList.remove('active');
    obj_dungeons.classList.remove('disabled'); 
}