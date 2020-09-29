import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

import { Form, ProgressBar } from "react-bootstrap";

const Uploader = (props) => {
  //   console.log(props);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      const time = new Date().getTime();
      const storage = firebase.storage();
      const uploadTask = storage
        .ref(`reviews/${time}-${image.name}`)
        .put(image);

      //set the progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(progress);
        },
        (errors) => {
          console.log(errors);
        },
        () => {
          setProgress(0);
          //get the download url
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("Download URL is ", downloadURL);
            props.handleImageName(uploadTask.snapshot.ref.name, downloadURL);
          });
        }
      );
    }
  };
  return (
    <>
      <Form.Group>
        <img src={props.img} alt="Upload" width="100%" />
        {progress === 0 ? (
          <Form.File
            id="custom-file"
            label="upload an image"
            custom
            onChange={handleChange}
          />
        ) : (
          <ProgressBar animated now={progress} />
        )}
      </Form.Group>
    </>
  );
};

export default Uploader;
