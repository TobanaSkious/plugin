

function searchA(ev) {
  let all_tasks = document.querySelectorAll(".task");
  let ab = ev.target.value;
  console.log(ab);
  if (ab.length == 0) {
    for (let i = 0; i < all_tasks.length; i++) {
      // console.log(all_tasks);
      all_tasks[i].style.display = "";
    }
    return;
  } else {
    for (let i = 0; i < all_tasks.length; i++) {
      let titre = all_tasks[i].querySelector(".title").innerHTML;
      console.log(titre);
      let bc = 0;
      let j = 0;
      while (j < ab.length) {
        console.log(titre[j]);
        console.log(ab[j]);
        if (titre[j] != ab[j]) {
          all_tasks[i].style.display = "none";
          bc = 1;
        } else {
          all_tasks[i].style.display = "";
        }
        if (bc == 1) {
          j = titre.length;
        }
        j++;
      }
    }
  }
  
}

