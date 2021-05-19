import React, { useState, useCallback, useEffect } from 'react'
import Cropper from 'react-easy-crop'

import { getCroppedImg } from './canvasUtils'
import {
    Container,
    CropContiner,
    ZoomSlider,
    Slider,
    ButtonUpload,
    ButtonCancel,
    ButtonsContent
} from './styled'

const CropImage = ({ image, handlerCancel, setCroppedImage }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [file, setFile] = useState('')
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)


    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
        console.log(croppedArea, croppedAreaPixels)
    }, [])

    const handleCroppImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                file,
                croppedAreaPixels
            )
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [file, croppedAreaPixels, setCroppedImage])



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
        <Container>
            <CropContiner>
                <Cropper
                    image={file}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </CropContiner>
            <ZoomSlider>
                <h3>Zoom</h3>
                <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e, zoom) => setZoom(zoom)}

                />
            </ZoomSlider>
            <ButtonsContent>
                <ButtonCancel
                    onClick={handlerCancel}
                    variant="contained"
                    color="primary"
                >
                    Cancel
                </ButtonCancel>
                <ButtonUpload
                    onClick={handleCroppImage}
                    variant="contained"
                    color="primary"
                >
                    Done
                </ButtonUpload>
            </ButtonsContent>
        </Container>
    )
}

export default CropImage