document.addEventListener('DOMContentLoaded', documentEvents, false);

function getUserName(input) {
    var name = input.value;
    alert("The entered data is : " + input.value);
    document.getElementById("user_name").innerHTML = name;
    // TODO:
    // Hide #user_name_wrap
    // Save username to local storage / or sync
}

function documentEvents() {
  document.getElementById('submit_user_name').addEventListener('click',
    function() {
      getUserName(document.getElementById('user_name_input'));
    }
  );
}
