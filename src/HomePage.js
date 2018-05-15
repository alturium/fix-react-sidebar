import React from "react";
import Footer from "./Footer";
import Button, { ButtonGroup } from "@atlaskit/button";
import Checkbox from '@atlaskit/checkbox'

const style = {
  buttonBar: {
    display:'flex',
    justifyContent: 'flex-end'
  },
  buttonStyle: {
    position: "relative",
    float: "right"
  }
};

const RowItem = (props:any) => (
  <div className='row'>
    <div className='col col-sm-1' style={{ justifyContent: 'left'}}>
      {...props.children}
    </div>
  </div>
)

const HomePage = () => (
  <div className="container">

   
    <div className='container-fluid'>
      <div className='row py-3'>
          <h4>Page Examples </h4>
      </div>
      <RowItem > 
          <a href="/browse" className="btn btn-default">Browse Page</a>
      </RowItem > 
      <RowItem > 
        <a href="/browse-sidebar" className="btn btn-default">Browse With Sidebar</a>
      </RowItem > 
      <RowItem > 
        <a href="/filter-pane-example" className="btn btn-default">Filter Pane Example</a>
      </RowItem > 
      <div className='row py-3'>
        <h4>Component Examples </h4>
      </div>
      <RowItem > 
        <a href="/select-list-example" className="btn btn-default"  >Select List Example </a>
      </RowItem>      
      <RowItem > 
        <a href="/object-view-summary-example" className="btn btn-default">Object View (Summary)</a>
      </RowItem>
     
      <RowItem > 
        <a href="/action-bar-example" className="btn btn-default">Action Bar Example</a>
      </RowItem>
      <RowItem > 
        <a href="/quick-search-example" className="btn btn-default">Quick Search Example</a>
      </RowItem>
      <RowItem > 
        <a href="/fixed-header-with-vertical-scroll-example" className="btn btn-default">Fixed Header with Vertical Scroll Example</a>
      </RowItem>
      <RowItem > 
        <a href="/select-table-hoc-example" className="btn btn-default">Select Table (using HOC from react-table)</a>
      </RowItem>
      <RowItem > 
        <a href="/element-page-example" className="btn btn-default">Element Page Example</a>
      </RowItem>
      <RowItem > 
        <a href="/element-table-example" className="btn btn-default">Element Table Example</a>
      </RowItem > 
      <div className='row py-3'>
        <h4> Misc examples </h4>
      </div>
      <div className='h-100' >
      </div>
      <div className='row'>
        <p>Example of right-aligned button bar (use justifyContent) </p>
        <div className="col col-sm-8">
          <ButtonGroup appearance="default" >
            <Button shouldFitContainer={true} appearance='default' >Angular</Button>
            <Button shouldFitContainer appearance='default' >Ember</Button>
            <Button appearance='default'>React</Button>
          </ButtonGroup>
        </div>
        <div className="col col-sm-4" style={style.buttonBar}>
          <ButtonGroup>
            <Button>Angular</Button>
            <Button>Ember</Button>
            <Button>React</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className='w-100' />
      <div>
        <h2>Atlassian Example</h2>
        <Button> Atlas Button </Button>
        <div className="btn btn-primary" type="button">
        {" "}
          Bootstrap Button{" "}
        </div>
        <div style={{width:'100%'}} >
          <Checkbox label="checkbox" />
        </div>
      </div>
      
    <Footer />
  </div>
  </div>
);

export default HomePage;