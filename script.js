document.addEventListener("DOMContentLoaded", function () {

    // Pobierz przycisk i dołącz addEventListener'a
    var addTask = document.querySelector('.form__button');
    addTask.addEventListener("click", newTask);

    var ul = document.querySelector('.card-list');
    var number = 0;


    // Po kliknięciu wywołaj funkcję newTask()
    function newTask() {

        // Pobierz wartość tytułu i opisu
        var task = document.querySelector('.form__input');
        var taskDesc = document.querySelector('.form__textarea');

        // Jeżeli pola tytułu i opisu są puste to ...
        if (task.value == '' && taskDesc.value == '') {
            task.classList.add('error');
            taskDesc.classList.add('error');

            setTimeout(function () {
                task.classList.remove('error');
                taskDesc.classList.remove('error');
            }, 1000);
        }

        // Jeżeli pole tytułu jest puste to ...
        else if (task.value == '') {
            task.classList.add('error');

            setTimeout(function () {
                task.classList.remove('error');
            }, 1000);
        }

        // Jeżeli pole opisu jest puste to ...
        else if (taskDesc.value == '') {
            taskDesc.classList.add('error');

            setTimeout(function () {
                taskDesc.classList.remove('error');
            }, 1000);

        }

        // W innym wypadku weź stwórz element li z tytułem i opisem
        else {
            number++;
            var li = document.createElement('li');

            li.classList.add('card');
            li.classList.add('card-task');
            li.classList.add('color-' + number);
            li.innerHTML = prepareTaskHTML(task.value, taskDesc.value, number);
            ul.appendChild(li);
            task.value = '';
            taskDesc.value = '';

            if (number == 7) {
                number = 0;
            }
        }
    }

    // Aby do li dodać html użyj funkcji ...
    function prepareTaskHTML(task, taskDesc, number) {
        return '<div class="card-container">' +
            '<h2 class="card__title ">' + task + '</h2>' +
            '<p class="card__desc">' + taskDesc + '</p>' +
            '</div>' +
            '<div class="btn-container">' +
            '<button class="btn btn--cancel btn--color-' + number + ' hvr-shutter-out-vertical" type="button" aria-label="Nie wykonane">' +
            '<svg class="card-icon" viewBox="0 0 512 512">' +
            '<title>Krzyżyk</title>' +
            '<path d="M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"></path>' +
            '</svg>' +
            '</button>' +
            '<button class="btn btn--done btn--color-' + number + '" type="button" aria-label="Wykonane">' +
            '<svg class="card-icon" viewBox="0 0 512 512">' +
            '<title>Fajka</title>' +
            '<path d="M432 64l-240 240-112-112-80 80 192 192 320-320z"></path>' +
            '</svg>' +
            '</button>' +
            '</div>';
    }

    // Usuń element
    ul.addEventListener('click', function (e) {
        if (e.target.closest('.btn') !== null) {
            e.target.closest('.card').remove();
        }
    });

});