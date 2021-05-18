import React, { useState } from 'react'
import UpLoadButton from '@material-ui/core/Button'

import Dropzone from '../DropZone/DropZone'
import CropImage from '../CropImage/CropImage'
import { DropCropSave, Drop, Crop, CurrentImage } from './styled'

const DropCropSaveImage = ({ logo }) => {
    const [image, setImage] = useState()
    const [step, setStep] = useState(1)

    const handlerStep = step => setStep(step)

    const handlerUploadButton = () => {
        handlerStep(2)
    }

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
                    <Dropzone setImg={setImage} handlerStep={handlerStep} />
                </Drop>
            }

            {(step === 3 && image) &&
                <Crop>
                    <div>
                        <h2>CropZone</h2>
                        <CropImage image={image} handlerStep={handlerStep} />
                    </div>
                </Crop>
            }
        </DropCropSave>
    )

}

export default DropCropSaveImage