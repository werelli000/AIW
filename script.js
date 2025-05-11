
let action_btns = document.querySelectorAll("button[data-target]");
let scene_list = document.querySelectorAll(".scene");

action_btns.forEach(function(btn) {
  btn.addEventListener("click", function () {
    let nextScene = btn.getAttribute("data-target");

    scene_list.forEach(function(scene) {
      scene.classList.remove("active");
    });

    let target = document.querySelector("#" + nextScene);
    if (target) {
      target.classList.add("active");
    }
  });
});
