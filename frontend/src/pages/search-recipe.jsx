import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const SearchRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "",
        {},
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("This feature is under development!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-recipe">
      <h2>Search Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">AI_Prompt</label>
        <textarea
          id="ai_prompt"
          name="ai_prompt"
          value={recipe.ai_prompt}
          onChange={handleChange}
        ></textarea>
        <button type="submit" id="button">Search Recipe</button>
      </form>
    </div>
  );
};