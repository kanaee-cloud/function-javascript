document.addEventListener("DOMContentLoaded", function(){
    const textInput = document.getElementById("textInput");
    const addButton = document.getElementById("addButton");
    const outputList = document.getElementById("outputList");
    const dataArray = [];

    addButton.addEventListener("click", function(){
        const inputText = textInput.value.trim();

        if(inputText !== ""){
            dataArray.push(inputText);
            textInput.value = "";
            displayArray();
        } else{
            alert("Please enter some text to add your list.")
        }
    });

    function displayArray(){
        outputList.innerHTML = "";

        for (let i = 0; i < dataArray.length; i++){
            const listItem = document.createElement("li");
            listItem.textContent = dataArray[i];
            outputList.appendChild(listItem);
        }
    }
});