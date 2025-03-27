document.addEventListener("DOMContentLoaded", () => {
    const fetchBtn = document.getElementById("fetchData");
    const output = document.getElementById("output");

    fetchBtn.addEventListener("click", () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => {
                output.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                output.textContent = "Помилка: " + error;
            });
    });
});
