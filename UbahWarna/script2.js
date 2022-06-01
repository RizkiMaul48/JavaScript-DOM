
// <!-- CREATE BY RIZKI MAULANA Y -->

const merah = document.querySelector('input[name=m');
const hijau = document.querySelector('input[name=h]');
const biru = document.querySelector('input[name=b]');


const warna1 = Math.round( Math.random() * 255 + 1 );
const warna2 = Math.round( Math.random() * 255 + 1 );
const warna3 = Math.round( Math.random() * 255 + 1 );





merah.addEventListener( 'input', function() {

    const warna1 = merah.value;
    const warna2 = hijau.value;
    const warna3 = biru.value;

    document.body.style.backgroundColor = 'rgb('+warna1+','+warna2+','+warna3+')';

} );



hijau.addEventListener( 'input', function() {

    const warna1 = merah.value;
    const warna2 = hijau.value;
    const warna3 = biru.value;

    document.body.style.backgroundColor = 'rgb('+warna1+','+warna2+','+warna3+')';

} );



biru.addEventListener( 'input', function() {

    const warna1 = merah.value;
    const warna2 = hijau.value;
    const warna3 = biru.value;

    document.body.style.backgroundColor = 'rgb('+warna1+','+warna2+','+warna3+')';

} );