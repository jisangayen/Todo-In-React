import React from 'react';

function Notification({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <p>{message}</p>
                <div className="mt-4 flex justify-end gap-x-4">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Notification;
