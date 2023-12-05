import React, { useState } from "react";

function RecipeCreate({addToRecipes}) {

  
    const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      rating: "",
      ingredients: "",
      preparation: ""
    };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted:", formData);
    addToRecipes(formData); 
    // need to clear contents
    // setFormData("");
    setFormData({...initialFormState});
  };

  const [formData, setFormData] = useState({...initialFormState});
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  // const [name, setName] = useState("");
  // const [cuisine, setCuisine] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [rating, setRating] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [preparation, setPreparation] = useState("");

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name" 
                name="name" 
                type="text" 
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required={true} />
            </td>
            <td>
              <input
                id="cuisine" 
                name="cuisine" 
                type="text" 
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required={true} />
            </td>
            <td>
              <input
                id="photo" 
                name="photo" 
                type="url"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
                required={true} />
            </td>
            <td>
              <textarea
                id="ingredients" 
                name="ingredients" 
                type="text"
                placeholder="Ingredients" 
                onChange={handleChange}
                value={formData.ingredients}
                required={true}
                rows={2} />
            </td>
            <td>
            <textarea
                id="preparation" 
                name="preparation" 
                type="text" 
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required={true}
                rows={2} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
