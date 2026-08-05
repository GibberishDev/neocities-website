setTimeout(()=>{
    document.getElementById("startup-boot-text").remove()
    document.getElementById("boot-splash").style.display = ""
    setTimeout(()=>{
    document.getElementById("gibb-os-startup-loading-screen").style.opacity = "0"
    document.getElementById("login-screen").style.display = ""
    },5500)
    setTimeout(()=>{
    document.getElementById("gibb-os-startup-loading-screen").remove()
    },10000)
},1500)
// TODO: replace progress bar with actual loading to ensure all assets get downloaded