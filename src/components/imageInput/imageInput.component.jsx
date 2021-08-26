import { useState } from "react";


const ImageInput = ({setName}) =>{
    const [imageSrc,setImageSrc] = useState("")
    
    const onInputChange = (event) =>{
        event.preventDefault()
        let reader = new FileReader();
        reader.onload = (event) => {
            let dataURL = reader.result;
            let nLetters = dataURL.indexOf(";")
            let text = dataURL.slice(0,nLetters)
            console.log(text)
            dataURL = dataURL.replace(text,"data:image/jpeg")
            let base64Image = dataURL.replace("data:image/jpeg;base64,","");
            base64Image = base64Image.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
            setName(base64Image)
            // setImageMessage(base64Image)
            setImageSrc(dataURL)
        }
    
        reader.readAsDataURL(event.target.files[0]);
        //this.setState({input:event.target.files[0]});
        //setName(event.target.files[0])
        
      }


    return (
        <div>
        <input id="image-selector" text="Upload dog image" className="" type='file' onChange={onInputChange}/>
        <img id='inputimage' className='' alt='' src={imageSrc} style={{maxWidth: '300px', paddingTop: '1rem'}} height='auto' />
      </div>
    )
}

export default ImageInput