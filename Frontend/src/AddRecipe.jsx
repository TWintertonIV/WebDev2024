import NewRecipe from './newRecipe.jsx';

function AddRecipe() {
    const [myForm, setMyForm] = useState(false);
  
    function showForm(){
      setMyForm(!myForm);
    }
  
    return ( 
      <>
        <div>
          <button onClick={showForm}></button>
          <p>New Recipe</p>
          {myForm && <NewRecipe />}
        </div>
      </>
    );
  }

  export default AddRecipe;