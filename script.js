const horizontalSide = document.getElementById("left-right-selection");
const verticalSide = document.getElementById("top-bottom-selection");
const generateToastBtn = document.getElementById("generate-toast");
const toastContainer = document.querySelector(".toast-container");
const toastType = document.getElementById("toast-type");
const toastMessageText = document.getElementById("toast-text");
const toastDuration = document.getElementById("duration");

const generateToast = () => {

    toastContainer.classList.remove("top-left");
    toastContainer.classList.remove("top-right");
    toastContainer.classList.remove("bottom-left");
    toastContainer.classList.remove("bottom-right");

    const horizontalSide_Value = horizontalSide.value;
    const verticalSide_Value = verticalSide.value;
     
    if(horizontalSide_Value === "left" && verticalSide_Value === "top" ){
        toastContainer.classList.add("top-left");
    }
    else if(horizontalSide_Value === "right" && verticalSide_Value === "top"){
        toastContainer.classList.add("top-right");
    }
    else if(horizontalSide_Value === "left" && verticalSide_Value === "bottom"){
        toastContainer.classList.add("bottom-left");
    }
    else if(horizontalSide_Value === "right" && verticalSide_Value === "bottom"){
        toastContainer.classList.add("bottom-right");
    }else{
        alert("Something went wrong !! Please try again !!")
    }

}


const toastColor = (toast) => {
    //clear all class first 

    toast.classList.remove("success");
    toast.classList.remove("error");
    toast.classList.remove("info");
    toast.classList.remove("warning");

    //assing class 
    const toastType_Value = toastType.value;
    if(toastType_Value === "success"){
        toast.classList.add("success");
    }
    else if(toastType_Value === "error"){
        toast.classList.add("error");
    }
    else if(toastType_Value === "info"){
        toast.classList.add("info");
    }
    else if(toastType_Value === "warning"){
        toast.classList.add("warning");
    }else{
        alert("Something went wrong !!");
    }

}

const createToast = () => {
   const createToastElement = document.createElement("div");
   createToastElement.classList.add("toast");
   toastContainer.appendChild(createToastElement);
   createToastElement.innerText = toastMessageText.value.trim();
   
   toastColor(createToastElement);

   let toastDuration_Value = Math.floor(toastDuration.value);

   setTimeout(() => {
    createToastElement.remove();
   }, toastDuration_Value * 100);

}

generateToastBtn.addEventListener("click", () => {
    generateToast();
    createToast();
});



