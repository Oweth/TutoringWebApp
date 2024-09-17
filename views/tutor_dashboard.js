// Sidebar toggle button
document.getElementById("toggleButton").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");

    // Adjust resource-sharing-section width when sidebar is toggled
    adjustResourceSectionWidth();
});