const overlay = document.getElementById('modalOverlay');
const modals = document.querySelectorAll('.modal-card');

function openModal(modalId) {
    modals.forEach(m => { m.style.display = 'none'; m.classList.remove('active'); });
    overlay.style.display = 'flex';
    const target = document.getElementById(modalId);
    if(target) {
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);
    }
}

function closeAllModals() {
    overlay.style.display = 'none';
}

overlay.addEventListener('click', (e) => { if (e.target === overlay) closeAllModals(); });

// BMI Logic
function calculateBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value / 100;
    const res = document.getElementById('bmiResult');
    if (w > 0 && h > 0) res.innerText = "BMI: " + (w / (h * h)).toFixed(1);
}

// Macros Logic
function calculateMacros() {
    const weight = document.getElementById('mWeight').value;
    const goal = document.getElementById('mGoal').value;
    const res = document.getElementById('macroResult');
    if (weight > 0) {
        let p = weight * 2.2;
        let c = goal === 'gain' ? weight * 4 : weight * 2;
        res.innerHTML = `Protein: ${p.toFixed(0)}g | Carbs: ${c.toFixed(0)}g | Fats: ${(weight * 0.8).toFixed(0)}g`;
    }
}