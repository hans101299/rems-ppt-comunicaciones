import React from 'react';

// Componente de descarga
const DownloadImage = ({ imageBlobUrl, imageName }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageBlobUrl;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload}>Descargar Imagen</button>
    );
};

export default DownloadImage;