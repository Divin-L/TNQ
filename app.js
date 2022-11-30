let form = document.querySelector("form");
let input = document.getElementById("inp");
let output = document.getElementById("op");

form.addEventListener("submit", e => {
  e.preventDefault();
  let val = input.value;
  let fval = eval(val);
  var valueArr = fval.map(function (item) {
    return item.id;
  });
  valueArr.some(function (name, idx) {
    console.log(name);
    let test = valueArr.indexOf(name) != idx;
    console.log(test);
    if (test === true) {
      alert(`in json  is Duplicated Value `);
      output.value = "";
    } else {
      fval.map(e => {
        output.value += `<div class="root" data-id=${e.id}>
    <span class="username">${e.username}</span>
    <span class="video_name">${e.video_name}</span>
    <span class="additional_details">
        <span class="type">${e.action}</span>
    </span>
</div>`;
      });
    }
  });
});
