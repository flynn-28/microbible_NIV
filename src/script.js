function load(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('error');
            }
            return response.arrayBuffer(); 
        })
        .then(data => {
            const decomped = bz2.decompress(new Uint8Array(data));

            const text = new TextDecoder().decode(decomped);

            document.getElementById('output').textContent = text;
        })
        .catch(error => {
            console.error('error:', error);
            document.getElementById('output').textContent = 'error';
        });
}

const file = 'niv.txt.bz2';

load(file);