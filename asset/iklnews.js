setTimeout(() => {
  if (document.getElementById('j91').clientHeight == 0)
swal({      
    title: "Ad blocker detected!",
    text: "We have detected that you are using adblocking plugin in your browser.The revenue we earn by the advertisements is used to manage this website, we request you to whitelist our website in your adblocking plugin.",
    icon: "warning",
    closeOnClickOutside: false,
    buttons: false,
})

}, 2200)
