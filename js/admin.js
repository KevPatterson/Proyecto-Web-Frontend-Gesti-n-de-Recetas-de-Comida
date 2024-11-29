// JavaScript para abrir y cerrar el sidebar
document.querySelector('.open-btn').addEventListener('click', function() {
const sidebar = document.getElementById('sidebar');
if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px';
} else {
    sidebar.style.left = '0px';
}
});

// Bar chart
var ctxBar = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Recipes Created',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line chart
var ctxLine = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Website Traffic',
            data: [30, 50, 40, 60, 80, 100],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Data for the ranking table
var rankingData = [
    { rank: 1, recipe: 'Tarta de Manzana', author: 'Ana Pérez', score: 4.8 },
    { rank: 2, recipe: 'Paella', author: 'Carlos García', score: 4.7 },
    { rank: 3, recipe: 'Empanadas', author: 'María López', score: 5.0 },
    { rank: 4, recipe: 'Tacos', author: 'José Martínez', score: 3.4 },
    { rank: 5, recipe: 'Sushi', author: 'Mika Tanaka', score: 2.2 },
    { rank: 6, recipe: 'Pizza Margherita', author: 'Giovanni Rossi', score: 3.0 },
    { rank: 7, recipe: 'Ratatouille', author: 'François Dupont', score: 4.9 },
    { rank: 8, recipe: 'Ceviche', author: 'Luis Ramírez', score: 3.7 },
    { rank: 9, recipe: 'Feijoada', author: 'João Silva', score: 4.5 },
    { rank: 10, recipe: 'Pad Thai', author: 'Somchai Thammaporn', score: 2.3 }
];

// Populate the ranking table
var rankingTable = document.getElementById('rankingTable');
rankingData.forEach(function(item) {
    var row = document.createElement('tr');
    row.innerHTML = `<td>${item.rank}</td><td>${item.recipe}</td><td>${item.author}</td><td>${item.score}</td>`;
    rankingTable.appendChild(row);
});

//SideBar
document.getElementById('sidebarToggle').addEventListener('click', function(e) {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    const navbar = document.querySelector('.main-header.navbar');
    sidebar.classList.toggle('hidden');
    navbar.classList.toggle('compact');
});