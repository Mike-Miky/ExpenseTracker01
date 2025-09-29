let entries = JSON.parse(localStorage.getItem('entries')) || [];

function addEntry() {
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!category || !amount) return alert("Please fill all fields");

    entries.push({ category, amount, type, date: new Date() });
    localStorage.setItem('entries', JSON.stringify(entries));
    renderEntries();
}

function renderEntries() {
    const list = document.getElementById('entries');
    list.innerHTML = '';
    let total = 0;

    entries.forEach((e, i) => {
        const li = document.createElement('li');
        li.textContent = `${e.type.toUpperCase()}: ${e.category} - ${e.amount}`;
        list.appendChild(li);
        total += e.type === 'income' ? e.amount : -e.amount;
    });

    document.getElementById('total').textContent = total;
}

renderEntries();
