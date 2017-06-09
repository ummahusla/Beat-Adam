document.addEventListener('DOMContentLoaded', documentEvents, false);

function firstTimeUser(input) {
  if (!input.value) {
    console.error('Error: No value specified');
    return;
  }
  var name = input.value;
  console.log("The entered data is : " + name);
  document.getElementById("user_name").innerHTML =  'Hello, ' + name;;
  document.getElementById('user_name_wrap').style.display = 'none';

  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'name': name}, function() {
    console.log('User name is saved');
  });

  document.getElementById('user_metrics_wrap').style.display = 'inline';
  getUserNameFromStorage();
}

function getUserNameFromStorage() {
  chrome.storage.sync.get("name", function (obj) {
    console.log(obj);
  });
}

// TODO:
// Write a function to check if there is a user name
// and data saved in storage if so
// show saved data from storage
// otherwise show the UI with 


function documentEvents() {
  document.getElementById('submit_user_name').addEventListener('click',
    function() {
      firstTimeUser(document.getElementById('user_name_input'));
    }
  );
}
