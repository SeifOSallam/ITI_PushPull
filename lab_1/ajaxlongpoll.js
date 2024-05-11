function fetchData() {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/posts',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            const myrow = $('#row');
            myrow.empty();
            data.data.forEach((post) => {
                myrow.append(`
                    <div class="card col-lg-3 col-md-6 col-sm-12" style="height:250px;">
                        <img src="${post.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `);
            });
            fetchData();
        }
    });
}

function runWithPolling() {
    fetchData();
}

runWithPolling();
