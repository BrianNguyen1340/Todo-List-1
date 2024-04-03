document.querySelector("#push").onclick = () => {
  // show alert when you do not add value in input
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a task");
  } else {
    // show task when you add value in input
    document.querySelector("#tasks").style.display = "block";

    // add new task
    document.querySelector("#tasks").innerHTML += 
      `<div class="task-container">
          <div class="task">
            <span id="taskname">
              ${document.querySelector("#newtask input").value}
            </span>
          </div>
          <button class="delete">Delete</button>
        </div>
      `;

    // delete task when click on delete button
    var currentTask = document.querySelectorAll(".delete");
    for (var i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
        if (document.querySelectorAll(".task-container").length == 0) {
          document.querySelector("#tasks").style.display = "none";
        }
      };
    }

    // line through task if it is completed
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    // reset value input
    document.querySelector("#newtask input").value = "";
  }
};
