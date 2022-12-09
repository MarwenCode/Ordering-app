import React, {useState} from 'react';
import "./addproduct.scss"

const AddProduct = () => {
  return (
    <div className="addproduct">
      <div className="wrapper">
        <span className="close">
          X
        </span>
        <h1>Add a new Pizza</h1>
        <div className="item">
          <label className="label">Choose an image</label>
          <input type="file" />
        </div>
        <div className="item">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            // onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="item">
          <label className="label">Desc</label>
          <textarea
            rows={4}
            type="text"
            // onChange={(e) => setDesc(e.target.value)}
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
            //   onChange={(e) => changePrice(e, 0)}
            />
            <input
            //   className={`${input} ${inputSm}`}
            className='input'
              type="number"
              placeholder="Medium"
            //   onChange={(e) => changePrice(e, 1)}
            />
            <input
            //   className={`${input} ${inputSm}`}
            className='input'
              type="number"
              placeholder="Large"
            //   onChange={(e) => changePrice(e, 2)}
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
        <button className="addButton">
          Create
        </button>
      </div>
    </div>
  )
}

export default AddProduct