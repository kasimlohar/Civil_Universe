import React, { useState } from 'react';
import { FaFile, FaTrash, FaDownload } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance';

const DocumentManager = ({ businessId }) => {
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (files) => {
    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('documents', file);
    });

    try {
      setUploading(true);
      const response = await axiosInstance.post(
        `/businesses/${businessId}/documents`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setDocuments(prev => [...prev, ...response.data]);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  // Document management logic and JSX
  // ...existing code...
};

export default DocumentManager;
