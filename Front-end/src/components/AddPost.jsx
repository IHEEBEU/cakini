import React, { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

const cloudName = 'dww70arvk'; // Replace with your Cloudinary cloud name

function AddPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [category, setCategory] = useState(''); // Set a default value
    const [price, setPrice] = useState('');

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'fcqswjeg'); // Replace with your Cloudinary upload preset

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                formData
            );
                console.log(response.data.secure_url);
            setSelectedImage(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading image: ', error);
        }
    };

    const handleSubmit = async () => {
        const productData = {
            name:title,
            description:description,
            image: selectedImage,
            category:category,
            price:price,
            quantityAvailable:10
        };

        try {
            const response = await axios.post('http://localhost:5000/products', productData);
            console.log('Product data submitted:', response.data);
            // You can also perform any additional actions or show success messages here
            setTitle('');
            setDescription('');
            setSelectedImage('');
            setCategory(''); // Reset to default value
            setPrice('');
        } catch (error) {
            console.error('Error submitting product data: ', error);
            // Handle error, show error messages, etc.
        }
    };

    return (
    <div >

      <form style={{"inline-size": "fit-content"}}>
      <h2 class="text-primary font-PRIMARY">ADD YOUR ARTICLE HERE</h2>
            <div className="form-row">
            <div className="form-group col-md-6">
                        <label htmlFor="inputTitle4">Title</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputTitle4"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                <div className="form-group col-md-6">
                        <label htmlFor="inputDescription4">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputDescription4"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
            </div>
          
            <div className="form-group col-md-4">
                    <label htmlFor="exampleFormControlFile1">Pick a picture</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        onChange={handleImageUpload}
                    />
                </div>
            <div className="form-row">
               
              
                <div className="form-group col-md-4">
                        <label htmlFor="inputCategory">Category</label>
                        <select
                            id="inputCategory"
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Choose...</option>
                            <option value="Party">Party</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Wedding">Wedding</option>
                        </select>
                    </div>
                <div className="form-group col-md-2">
                        <label htmlFor="inputPrice">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPrice"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
            </div>
            
            
            <button
                    type="button"
                    className="btn btn-outline-secondary"
                    style={{ "margin-top": '10px' }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
        </form>
    </div>
  )
}

export default AddPost
