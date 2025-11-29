var projects = [
  {
    "gif": "",
    "name": "Interactive 2D cloth simulation",
    "github": "https://github.com/shiro1307/Interactive-2D-cloth-simulation",
    "details": "Python, Raylib"
  },
  {
    "gif": "",
    "name": "A* pathfinding interactive visual demo",
    "github": "https://github.com/shiro1307/A-Star-demonstration",
    "details": "p5.js"
  },
  {
    "gif": "",
    "name": "A* pathfinding text-based demo",
    "github": "https://github.com/shiro1307/A-Star-Pathfinding-Algorithm-in-C",
    "details": "C"
  },
  {
    "gif": "",
    "name": "Hand-drawn digit recognition",
    "github": "https://github.com/shiro1307/handdrawn-digit-recognition",
    "details": "Python, Raylib"
  },
  {
    "gif": "",
    "name": "Mini brick breaker",
    "github": "https://github.com/shiro1307/mini-brick-breaker",
    "details": "Python, Raylib"
  },
  {
    "gif": "",
    "name": "Tic-tac-toe bot",
    "github": "https://github.com/shiro1307/Tic-tac-toe-bot-Minimax-algorithm-",
    "details": "Vanilla JS"
  },
  {
    "gif": "",
    "name": "Import Android orientation sensor data to Blender",
    "github": "https://github.com/shiro1307/orientation-sensor-csv-to-blender",
    "details": "Blender Python API"
  }
]

var table = document.getElementById("projects");
let newhtml = "";

projects.forEach(p => {
    
    newhtml += `
    <tr>
      <td><a href="${p.github}" target="_blank">${p.name}</a></td>
      <td>${p.details}</td>
    </tr>
  `;

});

table.innerHTML += newhtml;