import React from 'react'

export default function FormContainer({ children }) {
    return (
        <div className="fixed inset-0 dark:bg-primary -z-10 bg-white flex justify-center items-center">
            {children}
        </div>
    )
}
