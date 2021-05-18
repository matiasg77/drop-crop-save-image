import React, { useState } from 'react'
import Dropzone from '../DropZone/DropZone'
import CropImage from '../CropImage/CropImage'
import { DropCropSave, Drop, Crop, CurrentImage } from './styled'

const DropCropSaveImage = ({logo}) => {
    const [image, setImage] = useState()

    return (
        <DropCropSave>
            <CurrentImage>

            </CurrentImage>
            <Drop>
                <h2>Dropzone</h2>
                <Dropzone setImg={setImage} />
            </Drop>
            {image &&
                <Crop>
                    <div>
                        <h2>CropZone</h2>
                        <CropImage image={image} />
                    </div>
                </Crop>
            }
        </DropCropSave>
    )

}

export default DropCropSaveImage