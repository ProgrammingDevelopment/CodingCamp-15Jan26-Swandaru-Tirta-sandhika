// logical components for form handling and user interaction
window.onload = function () {
    replaceName();
};

function replaceName() {
    let name = prompt("Identify yourself (Insert Name):", "");
    if (name != null && name != "") {
        document.getElementById("user-greeting").innerHTML = name;
    } else {
        document.getElementById("user-greeting").innerHTML = "Guest";
    }
}

// 2. VALIDATION CORE: Memastikan integritas data sebelum diproses
function validateForm() {
    // Mengambil nilai dari DOM
    const name = document.forms["message-form"]["name"].value;
    const birthdate = document.forms["message-form"]["birthdate"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    // Logic Gate: Check for Null/Empty values
    if (name == "" || birthdate == "" || gender == "" || message == "") {
        alert("[ERROR] Data Incomplete. Please fill all required fields to proceed.");
        return false; // Hentikan proses submit
    }

    // Jika lolos validasi, eksekusi Display Protocol
    setSenderUI(name, birthdate, gender, message);
    return false; // Return false agar halaman tidak refresh (untuk demo SPA)
}

// 3. DISPLAY PROTOCOL: Menampilkan data kembali ke user (Feedback Loop)
function setSenderUI(name, dob, gender, msg) {
    // Current Time Stamp for Logging
    const now = new Date();

    // Inject Data ke DOM
    document.getElementById("sender-time").innerText = now.toString();
    document.getElementById("sender-name").innerText = name;
    document.getElementById("sender-dob").innerText = dob;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-msg").innerText = msg;

    // Reveal Output Panel
    document.getElementById("result-display").style.display = "block";

    alert(`[SUCCESS] Data from Agent ${name} has been secured.`);
}