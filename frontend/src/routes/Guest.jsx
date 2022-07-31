import styles from "./Guest.module.css"
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

function Guest (){



    return (
        <>
            <div className={styles.title}>
                방명록
            </div>


            
            <div className={styles.container}>
            <Grid id={styles.post_container} container>
                <Grid 
                item xs={12} sm={6} lg={3}
                id={styles.rgyPostIt}>
                    <div> 안녕하세요. 포스트잇 테스트 입니다. 글씨 남기고 갑니다. </div>    
                </Grid>
                <Grid 
                item xs={12} sm={6} lg={3}
                id={styles.rgyPostIt}>
                    <div> 안녕하세요. 포스트잇 테스트 입니다. 글씨 남기고 갑니다. </div>    
                </Grid>
                <Grid 
                item xs={12} sm={6} lg={3}
                id={styles.rgyPostIt}>
                    <div> 안녕하세요. 포스트잇 테스트 입니다. 글씨 남기고 갑니다. </div>    
                </Grid>        
                <Grid 
                item xs={12} sm={6} lg={3}
                id={styles.rgyPostIt}>
                    <div> 안녕하세요. 포스트잇 테스트 입니다. 글씨 남기고 갑니다. </div>    
                </Grid>        
                <Grid 
                item xs={12} sm={6} lg={3}
                id={styles.rgyPostIt}>
                    <div> 안녕하세요. 포스트잇 테스트 입니다. 글씨 남기고 갑니다. </div>    
                </Grid>        
            </Grid>
                <div>
                    <Link to='/' id={styles.back}><span> 돌아가기 </span></Link>
                </div>
            </div>
        </>
    );
}

export default Guest;