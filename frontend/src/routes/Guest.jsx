import styles from "./Guest.module.css"
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

function Guest (){

    const [guest_name, setGuest_name] = useState("");
    const [guest_text, setGuest_text] = useState("");
    const [guest_list, setGuest_list] = useState([]);
    const [render_number, setRender_number] = useState(0);

    useEffect(()=> {
        axios.get("http://localhost:4000/api/guest")
        .then((res)=>{
            setGuest_list(res.data.reverse());
        })
    },[render_number])

    
    function onNameChange(e){

        setGuest_name(e.target.value);
    }

    function onTextChange(e){

        setGuest_text(e.target.value);
    }

    function postVistor(){
        if (guest_name !=="" & guest_text !==""){
            axios.post("http://localhost:4000/api/guest",
            {
                "person_name": guest_name,
                "person_text": guest_text
            },
            {
                headers: {
                "Content-Type": "application/json",
                "Accept" : "*/*",
            },
            
        })
        .then((res)=>{
            console.log("방명록 작성 완료")
            setRender_number(render_number + 1);
            console.log(render_number)
            setGuest_name("");
            setGuest_text("");
        })
    }}

    function resetInput(){
        document.getElementById("inputname").value ='';
        document.getElementById("inputtext").value ='';
    }

    return (
        <>
            <div className={styles.title}>
                방명록
            </div>
            <input className={styles.inputname} id="inputname" onChange={onNameChange} maxLength="10" placeholder="성함을 적어주세요."></input>
            <textarea className={styles.inputtext} id="inputtext" onChange={onTextChange} name="text" maxLength="100" placeholder="하고 싶은 말 남기기"></textarea>
            <span id={styles.write} onClick={()=>{
                postVistor(); 
                resetInput()}}> 작성하기 </span>

            
            <div className={styles.container}>
            <Grid id={styles.post_container} container>
                {guest_list.map((guest, index) => (
                    <Grid key={index}
                    item xs={12} sm={5} lg={3}
                    id={styles.rgyPostIt}>
                        <div> {guest.person_text} </div>    
                        <div> {guest.person_name} </div>    
                    </Grid>
                ))}
                
            </Grid>
                <div>
                    <Link to='/' id={styles.back}><span> 돌아가기 </span></Link>
                </div>
            </div>
        </>
    );
}

export default Guest;