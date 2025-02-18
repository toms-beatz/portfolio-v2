import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: 'fyzl3rgg',  // Remplace par ton ID de projet Sanity
    dataset: 'prod', // Ou un autre dataset si tu en as configuré un
    useCdn: true, // Active le CDN pour des requêtes plus rapides en prod
    apiVersion: '2025-02-18', // Date de la dernière version de l'API

});