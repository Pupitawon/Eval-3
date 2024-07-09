document.getElementById('caloriesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const time = parseFloat(document.getElementById('time').value);
    const activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);

    let alertContainer = document.getElementById('result');

    if (weight < 1 || weight > 120) {
        alertContainer.classList.remove('alert-primary');
        alertContainer.classList.add('alert-danger');
        alertContainer.innerHTML = 'El peso debe estar entre 1 y 120 kg.';
        return;
    }

    if (time < 5 || time > 150) {
        alertContainer.classList.remove('alert-primary');
        alertContainer.classList.add('alert-danger');
        alertContainer.innerHTML = 'El tiempo debe estar entre 5 y 150 minutos.';
        return;
    }

    const calories = activity * 3.5 * weight * (time / 200);
    alertContainer.classList.remove('alert-danger');
    alertContainer.classList.add('alert-primary');
    alertContainer.innerHTML = `Calorías quemadas: ${calories.toFixed(2)}`;
});
