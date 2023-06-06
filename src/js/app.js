const ValidarFormulario = () => {

    const $form = document.querySelector('.form'),
        $inputs = document.querySelectorAll('.form [required]')
    console.log($inputs)



    $inputs.forEach(input => {
        let $span = document.createElement('span')
        $span.id = input.name;
        $span.textContent = input.title;
        input.insertAdjacentElement('afterend', $span);
        $span.classList.add('mensaje-error', 'none')
    });

    document.addEventListener('keyup', e => {
        if (e.target.matches('.form [required]')) {
            let target = e.target,
                pattern = target.pattern || target.dataset.parttern;

            if (pattern && target.value !== '') {
                let regx = new RegExp(pattern)
                return !regx.exec(target.value) ?
                    document.getElementById(target.name).classList.remove('none')
                    :
                    document.getElementById(target.name).classList.add('none')
            }
            if (!pattern) {
                return target.value === '' ?
                    document.getElementById(target.name).classList.remove('none')
                    :
                    document.getElementById(target.name).classList.add('none')
            }
        }
    });
    const $loader = document.querySelector('.loader'),
        $mensaje = document.querySelector('.mensaje')
    document.addEventListener('submit', e => {
        alert('enviando formulario')
        $loader.classList.remove('none')

        setTimeout(() => {
            $loader.classList.add('none')
            $mensaje.classList.remove('none')
            setTimeout(() => {
                $mensaje.classList.add('none')
            }, 3000);
        }, 3000);

    })
}

ValidarFormulario()