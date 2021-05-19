import React, { useState, useEffect } from 'react'

import Dropzone from '../DropZone/DropZone'
import CropImage from '../CropImage/CropImage'
import { DropCropSave, Drop, Crop, CurrentImage, UpLoadButton } from './styled'

const DropCropSaveImage = ({ logo }) => {
    const [image, setImage] = useState(null)
    const [step, setStep] = useState(1)
    const [croppedImage, setCroppedImage] = useState(null)

    const handlerStep = step => setStep(step)

    const handlerUploadButton = () => {
        handlerStep(2)
    }

    const handlerCancel = () => {
        setImage(null)
        handlerStep(1)
    }

    useEffect(() => {
        const imageUpload = () => {
            //TODO upload logic 
            console.log("base64 CroppedImage: ", croppedImage)
        }
        imageUpload()
    }, [croppedImage])

    return (
        <DropCropSave>
            {step === 1 &&
                <CurrentImage>
                    <UpLoadButton
                        onClick={handlerUploadButton}
                        variant="contained"
                        color="primary"
                    >
                        Upload
                    </UpLoadButton>
                </CurrentImage>
            }

            {step === 2 &&
                <Drop>
                    <h2>Dropzone</h2>
                    <Dropzone setImg={setImage} handlerStep={handlerStep} handlerCancel={handlerCancel} />
                </Drop>
            }

            {(step === 3 && image) &&
                <Crop>
                    <h2>CropZone</h2>
                    <CropImage image={image} handlerCancel={handlerCancel} setCroppedImage={setCroppedImage}/>
                </Crop>
            }
        </DropCropSave>
    )
}

export default DropCropSaveImage