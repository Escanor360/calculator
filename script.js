let currentInput = "";
            let resultDiv = document.getElementById("row0");

            function clr() {
                currentInput = "";
                updateResult();
            }

            function clk(value) {
                currentInput += value;
                updateResult();
            }

            function backspace() {
                currentInput = currentInput.slice(0, -1);
                updateResult();
            }

            function equal() {
                try {
                    currentInput = eval(currentInput);
                    currentInput = isNaN(currentInput) ? "Error" : currentInput.toFixed(2);
                    updateResult();
                } catch (error) {
                    resultDiv.innerText = "Error";
                }
            }

            function updateResult() {
                resultDiv.innerText = currentInput;
            }

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = (hours % 12) || 12;

    const timeString = `${hours}:${minutes}`;
    
    document.getElementById('tim').innerText = timeString;
}

// Initial call to display the time
updateTime();