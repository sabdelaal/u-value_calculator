document.addEventListener('DOMContentLoaded', function () {
    // Initialize the materials container with one material input
    addMaterial();
});

function addMaterial() {
    var materialsContainer = document.getElementById('materialsContainer');

    // Create a new material container
    var materialContainer = document.createElement('div');
    materialContainer.className = 'material-container';
    materialContainer.draggable = true;
    materialContainer.ondragstart = function (event) {
        drag(event);
    };

    // Material dropdown
    var materialDropdown = document.createElement('select');
    materialDropdown.className = 'material-dropdown';
    materialDropdown.required = true;
    for (var material in uValues) {
        var option = document.createElement('option');
        option.value = material;
        option.text = material;
        materialDropdown.add(option);
    }

    // Thickness input
    var thicknessInput = document.createElement('input');
    thicknessInput.type = 'number';
    thicknessInput.step = 'any';
    thicknessInput.placeholder = 'Thickness (m)';
    thicknessInput.className = 'thickness-input';
    thicknessInput.required = true;

    // Remove material button
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.onclick = function () {
        materialsContainer.removeChild(materialContainer);
    };

    // Append elements to the material container
    materialContainer.appendChild(materialDropdown);
    materialContainer.appendChild(thicknessInput);
    materialContainer.appendChild(removeButton);

    // Append the material container to the materials container
    materialsContainer.appendChild(materialContainer);
}

function calculateUValue() {
    var materialContainers = document.querySelectorAll('.material-container');
    var totalUValue = 0;

    materialContainers.forEach(function (materialContainer) {
        var selectedMaterial = materialContainer.querySelector('.material-dropdown').value;
        var thickness = parseFloat(materialContainer.querySelector('.thickness-input').value);
        var uValue = uValues[selectedMaterial];

        if (!isNaN(thickness) && !isNaN(uValue)) {
            totalUValue += uValue * thickness;
        }
    });

    // Display result
    document.getElementById('result').innerText = 'Total U-Value: ' + totalUValue.toFixed(4) + ' W/(m²K)';
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    var draggedElement = document.getElementById(data);
    var materialsContainer = document.getElementById('materialsContainer');
    materialsContainer.insertBefore(draggedElement, event.target);
}
