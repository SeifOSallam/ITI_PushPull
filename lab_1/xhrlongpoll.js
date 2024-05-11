function fetchData() {
    let xhr = new XMLHttpRequest();
    let url = 'http://127.0.0.1:8000/api/posts';
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            data = data.data;
            const myrow = document.getElementById('row');
            myrow.innerHTML = "";
            data.forEach((post) => {
                myrow.innerHTML += `
                    <div class="card col-lg-3 col-md-6 col-sm-12" style="height:250px;">
                        <img src="${post.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;
            });
            fetchData();
        }
    }
    xhr.send();
}

function runWithPolling() {
    fetchData();
}

runWithPolling();
