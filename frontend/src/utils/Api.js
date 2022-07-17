 class Api {
  constructor({ productionUrl, baseUrl, headers, credentials }) {
    this._productionUrl = productionUrl;
    this._headers = headers;
    this._baseUrl = baseUrl;
    this._credentials = credentials;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(res.json())
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._checkResponse);
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._checkResponse);

  }
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._checkResponse)
  }
}

export default Api;