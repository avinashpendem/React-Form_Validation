import { useState } from "react";
import { useForm } from "react-hook-form";
import '../components/Reactform.css';
export default function ReactHookFormMini() {
const { register, handleSubmit, formState: { errors, isSubmitting}} = useForm();
const [data, setData] = useState("offshore");
const onFormSubmit = data => console.log(data);
const onErrors = errors => console.error(errors);
const [selectedOption, setSelectedOption] = useState("offshore");

 const handleRadioChange = (event) => {

    setSelectedOption(event.target.value);
 }
return (
<div className="form-container">
<div>
<h1>Form Validation<span style={{color:'red'}}>*</span></h1>
<form onSubmit = {handleSubmit(onFormSubmit, onErrors)}>
<p><input className="first" placeholder="Associate Name" {...register("name", {required:"Please enter the Associate Name.",
pattern: {
value: /[A-Za-z ]{5,30}/ ,
message: 'Accepts Alphabets,Space & Min 5 to Max 30 Char'
}
})}
/></p>
<p style={{color:'red'}}>{errors?.name && errors.name.message}</p>
<p>
<input className="first" placeholder="Associate Id" {...register("aid", {required: "Please enter the Associate Id.",
pattern: {
value: /[0-9]{6}/ ,
message: 'Invalid Associate Id'
}
})}
/></p>
<p style={{color:'red'}}>{errors?.aid && errors.aid.message}</p>
<p>
<input className="first" placeholder="Project Id" {...register("pid", {required: "Please enter the Project Id.",
pattern: {
value: /[A-Za-z0-9]{10}/ ,
message: 'Invalid Project Id'
}
})}
/></p>
<p style={{color:'red'}}>{errors?.pid && errors.pid.message}</p>
<div>
<input
id="loc"
type="radio"
name="options"
value="offshore"
checked={selectedOption === "offshore"}
onChange={handleRadioChange}
message = "Please Select Location"
/>
<label>Offshore</label>
<input
    id="loc"
    type="radio"
    name="options"
    value="onshore"
    checked={selectedOption === "onshore"}
    onChange={handleRadioChange}
    message = "Please Select Location"
    />
<label>Onshore</label>
</div>
{selectedOption === "offshore" && (
<select className="first">
<option value="Select Location">Select Location</option>
<option value="Chennai">Chennai</option>
<option value="Bangalore">Bangalore</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Pune">Pune</option>
<option value="Kochi">Kochi</option>
</select>
)}
{selectedOption === "onshore" && (
<select className="first">
<option value="Select Location">Select Location</option>
<option value="US">US</option>
<option value="Non US">Non US</option>
</select>
 )}
<p style={{color:'red'}}>{errors?.loc && errors.loc.message}</p>

                <div className='allskill' { ...register("skill",{required:true,maxLength:5})}>
                        <div className='skill1'>
                        <input  className='check' type="checkbox" id="hmtl"  name="skill" value="hmtl" />
                        <label htmlFor="html">HTML5,CSS,JS</label><br></br>
                        
                        <input className='check'type="checkbox" id="hmtl" name="skill" value="hmtl"  />
                        <label htmlFor="html">SASS</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl" />
                        <label htmlFor="html">ES5,ES6,ES7...</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl" />
                        <label htmlFor="html">Bootstrap 4</label><br></br>
                        </div>

                        <div className='skill2'>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl" />
                        <label htmlFor="html">Angular 8</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl"/>
                        <label htmlFor="html">React JS</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl"  />
                        <label htmlFor="html">Veu JS</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl"  />
                        <label htmlFor="html">TypeScript</label><br></br>
                        </div>

                        <div className='skill3'>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl"/>
                        <label htmlFor="html">Express JS</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl"  />
                        <label htmlFor="html">Node JS</label><br></br>
                        <input className='check' type="checkbox" id="hmtl" name="skill" value="hmtl"/>
                        <label htmlFor="html">Mango DB</label><br></br>
                        </div>
                    </div>

<p style={{color:'red'}}>{errors?.skill && errors.skill.message}</p>
<div className="file-upload-container">
<label className="file-upload-label">Upload Profile</label> <br></br>
<input className="file-upload-input" type="file" {...register("pic", {required: "Please Upload Profile Picture.",
})}
/></div>
<p style={{color:'red'}}>{errors?.pic && errors.pic.message}</p>
<p>
<textarea cols="80" rows="4" placeholder="Comments" {...register("com", {required: "Please Enter Comments.",
})}
/></p>
<p style={{color:'red'}}>{errors?.com && errors.com.message}</p>
<p>
<button type='submit' className="submit" disabled={isSubmitting}>Submit</button>
<button type='reset' className="reset">Reset</button>
</p>
</form>
<div>
</div>
</div>
</div>
);
}