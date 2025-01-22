import React, { useState, useRef, useCallback } from 'react';
import { FaUpload, FaTimes, FaFile } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance';
import { useDropzone } from 'react-dropzone';

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

  const onDrop = useCallback(acceptedFiles => {
    handleUpload(acceptedFiles);
  }, [handleUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: multiple ? undefined : 1,
    accept: allowedTypes.join(',')
  });

  return (
    <div className="w-full">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300'}`}
      >
        <input {...getInputProps()} />
        <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop files here, or click to select files</p>
        )}
      </div>

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
  );
};

export default FileUpload;
