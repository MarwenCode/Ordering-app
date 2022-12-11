import React, {useState} from 'react';
import axios from "axios";
import "./addproduct.scss"

const AddProduct = () => {

  const [closeBtn, setCloseBtn] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };


  const createProduct = async() => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadFiles = await axios.post("https://api.cloudinary.com/v1_1/djzv6xzgd/image/upload",data);
      console.log(uploadFiles.data)
      const { url } = uploadFiles.data
      const newProduct = {
        title,
        desc,
        prices,
        img: url,
      };
      await axios.post("/products", newProduct)
      setCloseBtn(true)
      
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
     
     {!closeBtn && (
      <div className="addproduct">
      <div className="wrapper">
        <span className="close" onClick={() =>setCloseBtn((prev) => !prev)}>
          X
        </span>
        <h1>Add a new Pizza</h1>
        <div className="item">
          <label className="label">Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className="item">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="label">Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="label">Prices</label>
          <div className="priceContainer">
            <input
            //   className={`${input} ${inputSm}`}
            className='input'
              type="number"
              placeholder="Small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
            //   className={`${input} ${inputSm}`}
            className='input'
              type="number"
              placeholder="Medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
            //   className={`${input} ${inputSm}`}
            className='input'
              type="number"
              placeholder="Large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        {/* <div className=item>
          <label className=label>Extra</label>
          <div className=extra>
            <input
              className={`${input} ${inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${input} ${inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className="extraButton" onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div> */}
        <button className="addButton" onClick={createProduct}>
          Create
        </button>
      </div>
    </div>




    )




  }
    
    
    
    
    </>
    
   
   
  )
}

export default AddProduct