function showNotification() {
    var message = prompt("Enter the notification message:");
    var position = prompt("Enter the notification position (top-left, top-right, bottom-left, bottom-right):");
    
    var defaultDuration = 5000;

    var notification = document.createElement("div");
    notification.className = "notification ";
    notification.textContent = message;

    if (position === "top-left") {
        notification.style.top = "10px";
        notification.style.left = "10px";
    } else if (position === "top-right") {
        notification.style.top = "10px";
        notification.style.right = "10px";
    } else if (position === "bottom-left") {
        notification.style.bottom = "10px";
        notification.style.left = "10px";
    } else if (position === "bottom-right") {
        notification.style.bottom = "10px";
        notification.style.right = "10px";
    } else {
        alert("Invalid position!");
        return;
    }

    document.body.appendChild(notification);
    
    setTimeout(function() {
        document.body.removeChild(notification);
    }, defaultDuration);
}
