import { apiFetch } from './client'

export function getSongs() {
  return apiFetch('/songs')
}

export function createSong(payload) {
  return apiFetch('/songs', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function deleteSong(id) {
  const res = await fetch(`/api/songs/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!res.ok) throw new Error('Failed to delete song');
  return res.json();
}
