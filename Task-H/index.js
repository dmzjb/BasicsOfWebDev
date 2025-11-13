// index.js
// Author: Jakub Domowicz
// Date: 2025-11-06


document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("addInformationsForm");
    const tbody = document.getElementById("result").querySelector("tbody");
    const timestamp = document.getElementById("timestamp");

    form.addEventListener("submit", (event)=> {
        event.preventDefault();

        timestamp.value = new Date().toLocaleString();

        const fullName = document.getElementById("userName").value.trim();

        const nameRegex = /^[A-Za-zÀ-ÿ]{2,}\s+[A-Za-zÀ-ÿ]{2,}$/;

        if (!nameRegex.test(fullName)) {
            alert("Please enter your full name (first and last)");
            return;
        }

        const email = document.getElementById('email').value.trim();
        if (!email.includes('@')) {
            alert('Invalid email');
            event.preventDefault();
            return;
        }   

        const phone = document.getElementById('tel').value.trim();
        //if (!phone)

        const birth = document.getElementById("birth").value;
        if (!birth || new Date(birth) > new Date()){
            alert('Birth date cannot be in the future.');
            event.preventDefault();
            return;
        }

        if(!document.getElementById("terms").checked){
            alert('You must accept the terms.');
            event.preventDefault();
            return;
        }

        const row = document.createElement("tr");
        [fullName, email, phone, birth, timestamp.value].forEach(text => {
            const td = document.createElement("td");
            td.textContent = text;
            row.appendChild(td);
        });

        tbody.appendChild(row);
        form.reset();
    })
});
