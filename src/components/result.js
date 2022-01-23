/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, keyframes} from '@emotion/react'
import  Button  from '@mui/material/Button';
import BasicTable from './BasicTable';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
export default class Start extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div css={body}>
        <div css={wrapper}>
          <Typography variant="h6" component="div" sx={{ m: 2 }}>Result</Typography>
          <Grid container >
          <BasicTable 
            data={this.props.data}>
          </BasicTable>
          </Grid>
          <Button 
            sx={{ m: 2 }}
            onClick={this.props.startGame}
            variant='contained'>
              one more
          </Button>
        </div>
      </div>
    )
  }
};

const body = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`

const wrapper = css`
  background: white;
  width: 50%;
  text-align: center;
`
