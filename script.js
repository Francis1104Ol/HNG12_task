function updateTime() {
    const currentTimeUTC = new Date().toUTCString();
    document.getElementById('currentTimeUTC').innerText = currentTimeUTC;
}

window.onload = updateTime;
