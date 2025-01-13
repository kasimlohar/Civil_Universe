import React, { useState, useRef } from 'react';
import { FaUpload, FaTimes } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance';

const FileUpload = ({ 
  onUploadComplete, 
  maxSize = 5242880, // 5MB
  allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'],
  multiple = false 
}) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef();

  const handleUpload = async (selectedFiles) => {
    const formData = new FormData();
    Array.from(selectedFiles).forEach(file => {
      if (file.size > maxSize) {
        setError(`File ${file.name} is too large. Maximum size is ${maxSize/1024/1024}MB`);
        return;
      }
      if (!allowedTypes.includes(file.type)) {
        setError(`File ${file.name} has unsupported format`);
        return;
      }
      formData.append('files', file);
    });

    try {
      setUploading(true);
      const response = await axiosInstance.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      onUploadComplete(response.data);
      setFiles([...files, ...response.data]);
    } catch (error) {
      setError('Upload failed: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleUpload(e.target.files)}
          multiple={multiple}
          className="hidden"
          accept={allowedTypes.join(',')}
        />
        
        <button
          onClick={() => fileInputRef.current.click()}
          disabled={uploading}
          className="flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          <FaUpload />
          {uploading ? 'Uploading...' : 'Upload Files'}
        </button>

        {error && (
          <div className="mt-2 text-red-500 text-sm">
            {error}
          </div>
        )}

        {files.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="truncate text-sm">{file.name}</span>
                <button
                  onClick={() => {
                    setFiles(files.filter((_, i) => i !== index));
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
