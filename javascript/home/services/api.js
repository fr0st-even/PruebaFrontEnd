import { URI } from "../../uri.js";

export async function fetchUsers() {
    const response = await fetch(`${URI}/api/users`);
    return await response.json();
}

export async function fetchImages() {
    const response = await fetch(`${URI}/api/images`);
    return await response.json();
}

export async function fetchComments(imageId, userId, comment) {
    const response = await fetch(`${URI}/api/comment/${imageId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            comment: comment
        })
    });
    
    if (!response.ok) {
        throw new Error('Error al agregar comentario');
    }
    
    return await response.json();
}

export async function toggleLike(imageId, userId) {
    const response = await fetch(`${URI}/api/like/${imageId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId
        })
    });
    
    if (!response.ok) {
        throw new Error('Error al procesar like');
    }
    
    return await response.json();
}

export async function getLikes(imageId) {
    const response = await fetch(`${URI}/api/likes/${imageId}`);
    
    if (!response.ok) {
        throw new Error('Error al obtener likes');
    }
    
    return await response.json();
}

export async function uploadImage(formData) {
    const response = await fetch(`${URI}/api/upload`, {
        method: 'POST',
        body: formData // FormData se envía directamente sin Content-Type
    });
    
    if (!response.ok) {
        throw new Error('Error al subir imagen');
    }
    
    return await response.json();
}