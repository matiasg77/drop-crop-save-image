import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function Dropzone({ setImg, handlerStep }) {

    const onDrop = useCallback(acceptedFiles => {
        let file = acceptedFiles[0]
        setImg(file)
        handlerStep(3)
    }, [setImg, handlerStep])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default Dropzone