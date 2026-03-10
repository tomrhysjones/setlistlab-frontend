import { apiFetch } from './client'

export function getSetlists() {
  return apiFetch('/setlists')
}

export function createSetlist(payload) {
  return apiFetch('/setlists', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function addSongsToSetlist(id, songIds) {
  return apiFetch(`/setlists/${id}/songs`, {
    method: 'PUT',
    body: JSON.stringify({ songIds }),
  })
}

export function removeSongFromSetlist(id, songId) {
  return apiFetch(`/setlists/${id}/remove-song`, {
    method: 'PUT',
    body: JSON.stringify({ songId }),
  })
}

export function deleteSetlist(id) {
  return apiFetch(`/setlists/${id}`, {
    method: 'DELETE',
  })
}