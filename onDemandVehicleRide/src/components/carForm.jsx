import React, { useState } from 'react';

const CarCategoryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    numberOfPerson: 0,
    numberOfLuggage: 0,
    costPrice: 0,
    lateFee: 0,
    day: 0,
    hour: 0,
    ownerId: '',
    vehicleId: ''
  });
  const [image, setImage] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  


  
  
   
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        for (let key in values) {
          formData.append(key, values[key]);
        }
        onSubmit(formData);
      };


  return (
    <div>
      <h2>Add Car Category</h2>
      <form onSubmit={handleSubmit}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '20px', width: '300px' }}>
      <h3>{initialValues ? 'Edit Vehicle' : 'Add Vehicle'}</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="model">Model:</label>
          <input type="text" id="model" name="model" value={values.model || ''} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input type="text" id="registrationNumber" name="registrationNumber" value={values.registrationNumber || ''} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="modelYear">Model Year:</label>
          <input type="text" id="modelYear" name="modelYear" value={values.modelYear || ''} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="mileage">Mileage:</label>
          <input type="text" id="mileage" name="mileage" value={values.mileage || ''} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} />
        </div>
        {/* Add more input fields for other vehicle details */}
        <button type="submit">{initialValues ? 'Update' : 'Add'}</button>
      </form>
    </div>
  

        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Number of Person:</label>
          <input type="number" name="numberOfPerson" value={formData.numberOfPerson} onChange={handleChange} />
        </div>
        <div>
          <label>Number of Luggage:</label>
          <input type="number" name="numberOfLuggage" value={formData.numberOfLuggage} onChange={handleChange} />
        </div>
        <div>
          <label>Cost Price:</label>
          <input type="number" name="costPrice" value={formData.costPrice} onChange={handleChange} />
        </div>
        <div>
          <label>Late Fee:</label>
          <input type="number" name="lateFee" value={formData.lateFee} onChange={handleChange} />
        </div>
        <div>
          <label>Day:</label>
          <input type="number" name="day" value={formData.day} onChange={handleChange} />
        </div>
        <div>
          <label>Hour:</label>
          <input type="number" name="hour" value={formData.hour} onChange={handleChange} />
        </div>
        <div>
          <label>Owner Id:</label>
          <input type="text" name="ownerId" value={formData.ownerId} onChange={handleChange} />
        </div>
        <div>
          <label>Vehicle Id:</label>
          <input type="text" name="vehicleId" value={formData.vehicleId} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
export default CarCategoryForm;
