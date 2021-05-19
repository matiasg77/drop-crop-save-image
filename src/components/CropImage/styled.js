import styled from 'styled-components'
import SliderS from '@material-ui/core/Slider'
import ButtonS from '@material-ui/core/Button'

export const Container = styled.div`
    margin: 50px 50px;
`

export const CropContiner = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background: #333;
`

export const ZoomSlider = styled.div`
    padding: 16:
    display: flex;
    flexDirection: column;
    alignItems: center;
    flex: 1;
`

export const Slider = styled(SliderS)`
    && {
    padding: 22px 0px;
    marginLeft: 16;
    }
`

export const ButtonsContent = styled.div`
    
`

export const ButtonUpload = styled(ButtonS)`
    && {
        margin-left: 1.5em;
        width: 100px;
    }
`
export const ButtonCancel = styled(ButtonS)`
    && {
        background: gray;
        margin-right: 1.5em;
        width: 100px;
    }
`