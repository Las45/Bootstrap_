fetch('save.json')
    .then(response => response.json())
    .then(data => {
        const carouselInner = document.querySelector('#carouselExample .carousel-inner');
        
        if (!carouselInner || data.length === 0) return;

        carouselInner.innerHTML = '';

        const itemsPerSlide = 4; 

        for (let i = 0; i < data.length; i += itemsPerSlide) {
            const chunk = data.slice(i, i + itemsPerSlide);

            const carouselItem = document.createElement('div');

            carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;

            const row = document.createElement('div');
            row.className = 'row';

            chunk.forEach(movie => {
                const col = document.createElement('div');
                col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch';

                col.innerHTML = `
                    <div class="card w-100">
                        <img src="${movie.thumbnail}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.desciption}</p>
                            <a href="#" class="btn btn-primary mt-auto">Show Details</a>
                        </div>
                    </div>
                `;

                row.appendChild(col);
            });

            carouselItem.appendChild(row);
            carouselInner.appendChild(carouselItem);
        }
    })
    .catch(error => {
        console.error('Fehler beim Laden der JSON-Datei:', error);
    });