import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { DropContent, Drop, CancelButton } from './styled'

const Dropzone = ({ setImg, handlerStep, handlerCancel }) => {

    const onDrop = useCallback(acceptedFiles => {
        let file = acceptedFiles[0]
        setImg(file)
        handlerStep(3)
    }, [setImg, handlerStep])
    
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
      } = useDropzone({ onDrop })
    
    return (
        <DropContent>
            <Drop {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or <u>click</u> to select files</p>
                }
            </Drop>
            <CancelButton
                onClick={handlerCancel}
                variant="contained"
                color="primary"
            >
                Cancel
            </CancelButton>
        </DropContent>
    )
}

export default Dropzone