import { Cell, Grid } from "react-mdl";

const Experience = (props) => {
    return ( 
        <div>
           <Grid>
                <Cell col={4}>
                    <p className='text'>{props.startYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{props.job}</h4>
                    <p className='text'>{props.jobDescription}</p>
                </Cell>
            </Grid> 
        </div>
    );
}
 
export default Experience;