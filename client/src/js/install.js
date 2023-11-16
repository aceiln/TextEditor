const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidde', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const event = window.deferredPrompt;
    if(!event) {
        return;
    }
    event.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installation complete')
    window.deferredPrompt = null;
});
