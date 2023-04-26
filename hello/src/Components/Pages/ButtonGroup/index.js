import { Grid } from "@mui/material"
export default function ButtonGroup(){
    return(
        <>
        <Grid container spacing={0}>
        <Grid  xs={12}>
          <>xs=8</>
        </Grid>
        <Grid  xs={12}>
          <>xs=4</>
        </Grid>
        <Grid  xs={12}>
          <>hello</>
        </Grid>
        <Grid  xs={12}>
          <>xs=8</>
        </Grid>
      </Grid>
        </>
    )
}