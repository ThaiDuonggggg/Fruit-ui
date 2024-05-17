const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const inputEle = $('.form_control');
const btnClear = $('.btn_clear');

const handleClearValue = () => {
    inputEle.value = '';
    inputEle.focus();
}

btnClear.addEventListener('click', handleClearValue)