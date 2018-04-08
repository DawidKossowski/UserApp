class Http {
    constructor(url) {
      this.url = url;
    }

    async get(endpoint) {
        const response = await fetch(`${this.url}${endpoint}`);
        return response.json();
    }

    async delete(endpoint) {
        const response = await fetch(`${this.url}${endpoint}`, {
            method: 'DELETE',
        });

        return response.json();
    }

    async add(endpoint, newUser) {
        const response = await fetch(`${this.url}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(newUser)
        });

        return response.json();
    }

    async edit(endpoint, changedUser) {
        const response = await fetch(`${this.url}${endpoint}`, {
            method: 'PUT',
            body: JSON.stringify(changedUser)
        });

        return response.json();
    }
}


export const http = new Http('https://jsonplaceholder.typicode.com/');
