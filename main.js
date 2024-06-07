let nilaiList = [];
let no = 1;

document.getElementById('submitButton').addEventListener('click', function () {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;

    const presensiTeori = parseFloat(document.getElementById('presensiTeori').value);
    const tugasTeori = parseFloat(document.getElementById('tugasTeori').value);
    const utsTeori = parseFloat(document.getElementById('utsTeori').value);
    const uasTeori = parseFloat(document.getElementById('uasTeori').value);

    const presensiPraktik = parseFloat(document.getElementById('presensiPraktik').value);
    const tugasPraktik = parseFloat(document.getElementById('tugasPraktik').value);
    const utsPraktik = parseFloat(document.getElementById('utsPraktik').value);
    const uasPraktik = parseFloat(document.getElementById('uasPraktik').value);

    if (!nim || !nama || isNaN(presensiTeori) || isNaN(tugasTeori) || isNaN(utsTeori) || isNaN(uasTeori) || isNaN(presensiPraktik) || isNaN(tugasPraktik) || isNaN(utsPraktik) || isNaN(uasPraktik)) {
        alert('Harap isi semua data dengan benar');
        return;
    }

    const nilaiAkhir = (presensiTeori + tugasTeori + utsTeori + uasTeori + presensiPraktik + tugasPraktik + utsPraktik + uasPraktik) / 8;
    let grade;
    if (nilaiAkhir >= 85) {
        grade = 'A';
    } else if (nilaiAkhir >= 70) {
        grade = 'B';
    } else if (nilaiAkhir >= 55) {
        grade = 'C';
    } else if (nilaiAkhir >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    nilaiList.push({
        no: no++,
        nim,
        nama,
        presensiTeori,
        tugasTeori,
        utsTeori,
        uasTeori,
        presensiPraktik,
        tugasPraktik,
        utsPraktik,
        uasPraktik,
        nilaiAkhir,
        grade
    });

    updateTable();
    resetForm();
});

document.getElementById('resetButton').addEventListener('click', function () {
    resetForm();
});

document.getElementById('resetTableButton').addEventListener('click', function () {
    nilaiList = [];
    updateTable();
    no = 1;
});

function updateTable() {
    const nilaiTableBody = document.getElementById('nilaiTableBody');
    nilaiTableBody.innerHTML = '';
    nilaiList.forEach(nilai => {
        const row = document.createElement('tr');
        Object.values(nilai).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        nilaiTableBody.appendChild(row);
    });
}

function resetForm() {
    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensiTeori').value = '';
    document.getElementById('tugasTeori').value = '';
    document.getElementById('utsTeori').value = '';
    document.getElementById('uasTeori').value = '';
    document.getElementById('presensiPraktik').value = '';
    document.getElementById('tugasPraktik').value = '';
    document.getElementById('utsPraktik').value = '';
    document.getElementBy

}