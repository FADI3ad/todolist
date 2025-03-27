



let task = document.getElementById("Task");
let addbtn = document.getElementById("btn");

let usertasks = [];
addbtn.addEventListener("click",function(){

    let x = task.value;
    usertasks.push(x);
    showtasks();
})

task.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { 
        addbtn.click(); 
    }
});
function showtasks() {
    let taskrow = "";
    for (let i = 0; i < usertasks.length; i++) {
        taskrow += `
            <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md gap-6 text-wrap	">
                <p class="text-gray-800">${usertasks[i]}</p>
                <button onclick="deleteTask(${i})" class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Delete
                </button>
            </div>
            
        `;
    }
    
    document.getElementById("tasks-container").innerHTML = taskrow;
}
function deleteTask(i) {
    usertasks.splice(i, 1); 
    showtasks();
}
