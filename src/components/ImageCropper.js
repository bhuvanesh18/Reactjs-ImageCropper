import React, { useState, useEffect, useRef } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import './style.css';

function ImageCropper({imageSource}) {
    const [imageDestination, setImageDestination] = useState('');
    const imageRef = useRef(null);
    useEffect(() => {
        const cropper = new Cropper(imageRef.current , {
            zoomable : false,
            scalable : true,
            aspectRatio : 1,
            crop : () => {
                const canvas = cropper.getCroppedCanvas();
                setImageDestination(canvas.toDataURL('image/png'));
                /*
                // for getting the cropped image for storing in server
                canvas.toBlob((blobData) => {
                    const formData = new FormData();
                    formData.append('CroppedImage', blobData);
                    console.log(formData);
                })
                */
            }
        })
    }, [])
    return (
        <>
            <div className="original-img">
                <img src={imageSource} ref={imageRef} alt="source image"/>
            </div>
            <div>
                <img className="preview-img" src={imageDestination} alt="destination image"/>
            </div>
        </>
    )
}

export default ImageCropper
