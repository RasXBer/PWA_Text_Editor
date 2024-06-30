const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

      // Prevent Chrome 76 and later from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  // Set your custom install button click event
  butInstall.addEventListener('click', async () => {
    // Trigger the prompt
    event.prompt();
  });
});


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('J.A.T.E app installed successfully!', event); 
});
