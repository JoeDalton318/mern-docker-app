// /src/utils/imageUtils.js

/**
 * Convertit un fichier image en une chaîne base64.
 * @param {File} file - L'image à convertir
 * @returns {Promise<string>} - La chaîne base64
 */
export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result); // Résultat sous forme de base64
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); // Lire l'image en tant que DataURL (Base64)
    });
  };
  
  