import React, { useState, useCallback, useEffect } from 'react'
import Cropper from 'react-easy-crop'

const CropImage = ({ image }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [file, setFile] = useState('')

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])



    useEffect(() => {
        const convertFileToBase64 = () => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.readAsDataURL(image)
            reader.onload = () => setFile(reader.result)
        }
        convertFileToBase64()
    }, [image])

    return (
        <Cropper
            image={file}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
        />
    )
}

export default CropImage