import React, { Component } from 'react';
import Categories from '../../Categories';
import CategoryRow from './CategoryRow';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state ={
          categories: []
        }
    }
    
    async  componentWillMount() {
      const response = await fetch('/api/v1/categories');
      const body = await response.json();
      this.setState({ categories: body});
    }
    
    showData =()=>
    this.state.categories.map((value,key)=>(
        <CategoryRow
        key={key}
        id={value.id}
        categoryName={value.categoryName}
        description={value.description}
        delete={(id) => this.remove(value.id) }
        />
    ))
    async remove(id) {
      const b = '/api/v1/categories/'+id;
      const a = await fetch(b, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:{
          'id':id
        }

      }).then(() => {
        let updatedPosts = [...this.state.categories].filter(i => i.id !== id);
      this.setState({categories: updatedPosts});
    }
    );
    }
    

    render() {
        console.log(this.state);
        
        return (
            <div className="container-fluid">
  {/* Page Heading */}
  <h1 className="h3 mb-2 text-gray-800">Categories</h1>
  <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For
    more information about DataTables, please visit the <a href="https://datatables.net" target="_blank">official DataTables
      documentation</a>.</p>
  {/* DataTales Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">Categories Example</h6>
    </div>
    <div className="card-body">
      <div className="col-6 float-right">
        <a className="btn btn-success float-right" data-toggle="modal" data-target="#new">
          <i className="fa fa-plus-square" /> New category
        </a>
      </div>
      <div aria-hidden="true" aria-labelledby="example" className="modal fade" role="dialog" tabIndex={-1} id="new">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="example"> Add category</h5>
              <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="/admin/categories" method="post">
                <div className="form-group">
                  <input className="form-control" placeholder="category name" type="text" name="categoryName" />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="description" type="text" name="description" />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-dismiss="modal" type="button">Close
                  </button>
                  <button className="btn btn-primary" type="submit">Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm"><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="dataTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table cellSpacing={0} className="table table-bordered dataTable" id="dataTable" width="100%" role="grid" aria-describedby="dataTable_info" style={{width: '100%'}}>
                <thead>
                  <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="#: activate to sort column descending" style={{width: '26px'}}>#</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Category Name: activate to sort column ascending" style={{width: '184px'}}>Category Name</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Description: activate to sort column ascending" style={{width: '635px'}}>Description</th><th className="sorting" tabIndex={0} aria-controls="dataTable" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending" style={{width: '85px'}}>Action</th></tr>
                </thead>
                <tfoot>
                  <tr><th rowSpan={1} colSpan={1}>#</th><th rowSpan={1} colSpan={1}>Category Name</th><th rowSpan={1} colSpan={1}>Description</th><th rowSpan={1} colSpan={1}>Action</th></tr>
                </tfoot>
                <tbody>
                  
                    {this.showData()}
                  </tbody>
              </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 8 of 8 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx={2} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Category;